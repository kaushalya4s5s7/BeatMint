import React, { useState } from 'react';

export default function ProfileSetupPage() {
  const [username, setUsername] = useState('');
  const [preferences, setPreferences] = useState('');
  const [socialLink, setSocialLink] = useState('');
  const [wallet, setWallet] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission logic here to handle profile setup
    console.log({ username, preferences, socialLink, wallet });
  };

  return (
    <div className="profile-setup-page" style={styles.container}>
      <h1 style={styles.title}>Profile Setup</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            placeholder="Enter your username"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Preferences:</label>
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            style={styles.input}
            placeholder="Your preferences (e.g., NFT interests)"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Social Account (Optional):</label>
          <input
            type="text"
            value={socialLink}
            onChange={(e) => setSocialLink(e.target.value)}
            style={styles.input}
            placeholder="Link your social account"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Wallet Address:</label>
          <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            style={styles.input}
            placeholder="Set up your wallet"
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Save Profile
        </button>
      </form>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '1rem',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};
