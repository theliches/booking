import React, { useState } from 'react';
import { getSupabaseClient } from '../../../supabase/getSupabaseClient';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/dashboard'); // Redirect to dashboard on successful login
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '8px', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
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
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#66B2FF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <button type="button" onClick={() => navigate('/forgot-password')} style={{ background: 'none', border: 'none', color: '#66B2FF', cursor: 'pointer', textDecoration: 'none', marginBottom: '0.5rem' }}>
              Glemt adgangskode
            </button>
            <br />
            <button type="button" onClick={() => navigate('/register')} style={{ background: 'none', border: 'none', color: '#007BFF', cursor: 'pointer', textDecoration: 'none' }}>
              Opret bruger
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
