import React, { useState } from "react";
import {
  Box,
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Anchor,
} from "@mantine/core";
import { getSupabaseClient } from "../supabase/getSupabaseClient"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const supabase = getSupabaseClient();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Redirect to dashboard
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Box
      style={{
        backgroundColor: "#eeeeee",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh",
      }}
    >
      <Paper
        radius={5}
        padding="xl"
        style={{ width: "100%", maxWidth: 400, backgroundColor: "white",padding:"5vh" }}
        shadow="xs"
      >
        <Title order={3} style={{ marginBottom: 15, color: "#333333" }}>
          Log ind
        </Title>
        {error && (
          <Box style={{ color: "red", marginBottom: 10, textAlign: "left" }}>
            {error}
          </Box>
        )}
        <TextInput
          label="Email"
          placeholder="Din email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <PasswordInput
          label="Kodeord"
          placeholder="Dit kodeord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          
        />
        <Anchor
          href="#"
          style={{ fontSize: "0.8rem", color: "#1098ad", marginBottom:5 }}
        >
          Glemt kodeord?
        </Anchor>
        <Checkbox
          label="Husk mig"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.currentTarget.checked)}
          style={{ marginBottom: 20 }}
        />
        <Button
          fullWidth
          style={{ backgroundColor: "#1098ad" }}
          loading={loading}
          onClick={handleLogin}
        >
          Log ind
        </Button>
        <Anchor
          href="/register"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: 15,
            fontSize: "0.9rem",
            color: "#1098ad",
          }}
        >
          Opret profil
        </Anchor>
      </Paper>
    </Box>
  );
};

export default LoginPage;
