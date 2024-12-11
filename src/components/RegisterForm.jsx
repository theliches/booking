// Import necessary libraries
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
import { getSupabaseClient } from "../supabase/getSupabaseClient"; //

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [receiveEmail, setReceiveEmail] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const supabase = getSupabaseClient();

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            receiveEmail,
          },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        // Redirect or notify user of success
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
        padding:"5vh",
      }}
    >
      <Paper
        radius={5}
        padding="xl"
        style={{ width: "100%", maxWidth: 400, backgroundColor: "white",border: "1px solid #ccc" }}
      >
        <Title order={3} style={{ marginBottom: 15, color: "#333333" }}>
          Opret Bruger
        </Title>
        {error && (
          <Box style={{ color: "red", marginBottom: 10, textAlign: "left" }}>
            {error}
          </Box>
        )}
        <TextInput
          label="Navn"
          placeholder="Dit navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
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
          style={{ marginBottom: 15 }}
        />
        <PasswordInput
          label="Bekræft Kodeord"
          placeholder="Gentag kodeordet"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <Checkbox
          label="Vil gerne modtage notifikationer på mail"
          checked={receiveEmail}
          onChange={(e) => setReceiveEmail(e.currentTarget.checked)}
          style={{ marginBottom: 20 }}
        />
        <Button
          fullWidth
          style={{ backgroundColor: "#1098ad" }}
          loading={loading}
          onClick={handleRegister}
        >
          Opret Bruger
        </Button>
        <Anchor
          href="/login"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: 15,
            fontSize: "0.9rem",
            color: "#1098ad",
          }}
        >
          Allerede en bruger? Log ind
        </Anchor>
      </Paper>
    </Box>
  );
};

export default RegisterPage;