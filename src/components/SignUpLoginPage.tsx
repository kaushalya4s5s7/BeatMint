import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="onboarding-page" style={styles.container}>
      <h1 style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <button onClick={toggleForm} style={styles.toggleButton}>
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" style={styles.input} />
        </div>
        {!isLogin && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password:</label>
            <input type="password" name="confirmPassword" placeholder="Confirm your password" style={styles.input} />
          </div>
        )}
        <button type="submit" style={styles.submitButton}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <hr style={styles.separator} />
      <div style={styles.walletSection}>
        <p style={styles.walletText}>Or login with Web3 wallets</p>
        <div style={styles.walletButtons}>
          <button onClick={() => navigate('/profile')} style={styles.walletButton}>MetaMask</button>
          <button onClick={() => navigate('/profile')} style={styles.walletButton}>WalletConnect</button>
        </div>
      </div>
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
  toggleButton: {
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '1rem',
    width: '100%',
    maxWidth: '300px',
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
  separator: {
    margin: '2rem 0',
  },
  walletSection: {
    textAlign: 'center',
  },
  walletText: {
    marginBottom: '1rem',
  },
  walletButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  walletButton: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    background: '#e0e0e0',
  },
};
