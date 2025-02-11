import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    twitter: '',
    instagram: '',
    preferences: [] as string[]
  });

  const musicPreferences = [
    'Hip Hop', 'Rock', 'Jazz', 'Classical', 'Electronic',
    'Pop', 'R&B', 'Country', 'Metal', 'Folk'
  ];

  const handlePreferenceToggle = (preference: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter(p => p !== preference)
        : [...prev.preferences, preference]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the profile data to your backend
      console.log('Profile data:', formData);
      // Navigate to the main app or dashboard
      navigate('/');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">RhythMint</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24">
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Complete Your Profile</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                placeholder="Tell us about yourself"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Social Links (Optional)</label>
              <div className="space-y-3">
                <input
                  type="text"
                  value={formData.twitter}
                  onChange={(e) => setFormData(prev => ({ ...prev, twitter: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                  placeholder="Twitter username"
                />
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                  placeholder="Instagram username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Music Preferences</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {musicPreferences.map(preference => (
                  <button
                    key={preference}
                    type="button"
                    onClick={() => handlePreferenceToggle(preference)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      formData.preferences.includes(preference)
                        ? 'bg-white/20 border-white'
                        : 'bg-white/5 border-white/20 hover:bg-white/10'
                    }`}
                  >
                    {preference}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            >
              Complete Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
