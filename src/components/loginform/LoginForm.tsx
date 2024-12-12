import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, TextInput, PasswordInput, Button, Container, Title } from '@mantine/core';
import { getSupabaseClient } from '../../../supabase/getSupabaseClient'; // Adjusted path

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const supabase = getSupabaseClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login failed:', error.message);
      } else {
        navigate('/dashboard'); // Successful login, redirect to protected route
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Container
      size={420}
      my={40}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Paper radius="md" p="xl" withBorder style={{ backgroundColor: '#1a2432' }}>
        <Title order={2} align="center" mb="lg" style={{ color: 'white' }}>
          Login
        </Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '1rem' }}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: '1rem' }}
          />
          <Button type="submit" fullWidth style={{ backgroundColor: '#1a2432', color: 'white' }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
