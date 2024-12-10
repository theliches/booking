// login.lazy.jsx
import React, { useState } from "react";
import { Button, TextInput, Box, Paper, Title } from "@mantine/core";
import { getSupabaseClient } from "./getSupabaseClient"; // Adjust import as needed

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const supabase = getSupabaseClient();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        window.location.href = "/dashboard"; // Simplified redirection to dashboard
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Box style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper padding="xl" style={{ width: "100%", maxWidth: 400 }} shadow="xs">
        <Title order={2} align="center" style={{ marginBottom: 20 }}>
          Login
        </Title>
        {error && <Box style={{ color: "red", textAlign: "center" }}>{error}</Box>}
        <TextInput
          label="Email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          type="password"
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 20 }}
        />
        <Button fullWidth onClick={handleLogin} loading={loading}>
          Log in
        </Button>
      </Paper>
    </Box>
  );
};
export const Route = () => {
  return <div>Login Page</div>;
};
