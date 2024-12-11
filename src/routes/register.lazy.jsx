// register.lazy.jsx
import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import RegisterForm from '../components/RegisterForm'; // Adjust the import path as needed

export const Route = createLazyFileRoute('/register')({
  component: RouteComponent, // Attach the RouteComponent here
});

function RouteComponent() {
  return <RegisterForm />; // Render the RegisterForm component
}
