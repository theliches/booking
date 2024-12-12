import React, { useState } from 'react';
import LoginForm from '../components/loginform/LoginForm';
import RegisterForm from '../components/loginform/RegisterForm';

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '8px', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <button type="button" style={{ background: 'none', border: 'none', color: '#007BFF', cursor: 'pointer', textDecoration: 'underline' }}>
            Glemt adgangskode
          </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => setIsLogin(!isLogin)} style={{ padding: '0.5rem 1rem', border: '2px solid #007BFF', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007BFF', color: '#fff' }}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
