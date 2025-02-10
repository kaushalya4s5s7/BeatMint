// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TransactionContract {
    struct Transaction {
        uint256 transactionId;
        uint256 nftId;
        address buyer;
        address seller;
        uint256 price;
        uint256 timestamp;
        string transactionHash; // Unique identifier (hash) for verification
    }

    uint256 private nextTransactionId;
    mapping(uint256 => Transaction) public transactions;

    event TransactionRecorded(uint256 transactionId, uint256 nftId, address buyer, address seller, uint256 price);

    function recordTransaction(
        uint256 nftId,
        address buyer,
        address seller,
        uint256 price,
        string memory transactionHash
    ) public {
        uint256 transactionId = nextTransactionId++;
        transactions[transactionId] = Transaction({
            transactionId: transactionId,
            nftId: nftId,
            buyer: buyer,
            seller: seller,
            price: price,
            timestamp: block.timestamp,
            transactionHash: transactionHash
        });

        emit TransactionRecorded(transactionId, nftId, buyer, seller, price);
    }

    function getTransactionDetails(uint256 transactionId)
        public
        view
        returns (uint256, uint256, address, address, uint256, uint256, string memory)
    {
        Transaction memory txn = transactions[transactionId];
        return (txn.transactionId, txn.nftId, txn.buyer, txn.seller, txn.price, txn.timestamp, txn.transactionHash);
    }
}
