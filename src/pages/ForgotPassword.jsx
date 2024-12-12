import React, { useState } from 'react';
import { getSupabaseClient } from '../../../supabase/getSupabaseClient';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);

    if (error) {
      setError(error.message);
    } else {
      setMessage('Check your email for password reset instructions.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '8px', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Glemt adgangskode</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          {message && <div style={{ color: 'green', marginBottom: '1rem' }}>{message}</div>}
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
