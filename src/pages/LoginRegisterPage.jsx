import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginform/LoginForm';
import RegisterForm from '../components/loginform/RegisterForm';
import { getSupabaseClient } from '../../supabase/getSupabaseClient';

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Manage form type (login or register)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const supabase = getSupabaseClient();

  // Handle Register Form Submit
  const handleRegister = async (email, password) => {
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      // Automatically switch to Login view after registering
      setIsLogin(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Login Form Submit
  const handleLogin = async (email, password) => {
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      // Redirect to Dashboard on successful login
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '8px', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        {loading && <p style={{ textAlign: 'center', color: '#007BFF' }}>Loading...</p>}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

        {isLogin ? (
          <LoginForm onSubmit={handleLogin} />
        ) : (
          <RegisterForm onSubmit={handleRegister} />
        )}

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button type="button" style={{ background: 'none', border: 'none', color: '#007BFF', cursor: 'pointer' }}>
            Forgot password?
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            onClick={() => setIsLogin(!isLogin)} // Toggle between login and register
            style={{
              padding: '0.5rem 1rem',
              border: '2px solid #007BFF',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: '#007BFF',
              color: '#fff',
            }}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
