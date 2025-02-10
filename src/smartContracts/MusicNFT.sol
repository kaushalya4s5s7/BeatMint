// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract MusicNFT is ERC721URIStorage, Ownable, IERC2981 {
    struct MusicMetadata {
        string title;
        string artist;
        uint256 price;
        uint256 royaltyPercentage; // e.g., 5 for 5%
        address payable artistAddress;
    }

    uint256 private nextTokenId;
    mapping(uint256 => MusicMetadata) public musicDetails;
    mapping(uint256 => address) public nftOwners;

    event MusicNFTMinted(uint256 tokenId, string title, address artist);
    event MusicNFTTransferred(uint256 tokenId, address from, address to, uint256 price);
    
    constructor() ERC721("MusicNFT", "MUSIC") {}

    function mintMusicNFT(
        string memory _title,
        string memory _artist,
        string memory _tokenURI,
        uint256 _price,
        uint256 _royaltyPercentage
    ) public {
        require(_royaltyPercentage <= 100, "Royalty cannot exceed 100%");

        uint256 tokenId = nextTokenId++;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);

        musicDetails[tokenId] = MusicMetadata({
            title: _title,
            artist: _artist,
            price: _price,
            royaltyPercentage: _royaltyPercentage,
            artistAddress: payable(msg.sender)
        });

        nftOwners[tokenId] = msg.sender;
        emit MusicNFTMinted(tokenId, _title, msg.sender);
    }

    function transferOwnership(uint256 tokenId, address newOwner) public payable {
        require(ownerOf(tokenId) == msg.sender, "Only owner can transfer");
        require(msg.value >= musicDetails[tokenId].price, "Insufficient payment");

        address payable seller = payable(ownerOf(tokenId));
        uint256 royaltyAmount = (msg.value * musicDetails[tokenId].royaltyPercentage) / 100;
        uint256 sellerAmount = msg.value - royaltyAmount;

        musicDetails[tokenId].artistAddress.transfer(royaltyAmount);
        seller.transfer(sellerAmount);

        _transfer(msg.sender, newOwner, tokenId);
        nftOwners[tokenId] = newOwner;

        emit MusicNFTTransferred(tokenId, msg.sender, newOwner, msg.value);
    }

    function updatePrice(uint256 tokenId, uint256 newPrice) public {
        require(ownerOf(tokenId) == msg.sender, "Only owner can update price");
        musicDetails[tokenId].price = newPrice;
    }

    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        MusicMetadata memory music = musicDetails[tokenId];
        return (music.artistAddress, (salePrice * music.royaltyPercentage) / 100);
    }

    function getMusicMetadata(uint256 tokenId)
        public
        view
        returns (string memory title, string memory artist, uint256 price, address owner)
    {
        MusicMetadata memory music = musicDetails[tokenId];
        return (music.title, music.artist, music.price, nftOwners[tokenId]);
    }
}
