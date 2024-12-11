import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import React, { lazy, Suspense } from 'react';
import { RouterProvider, Route, Router, createRoute } from '@tanstack/react-router';

import App from "./App";
import "./global.css"; 


// Mantine CSS Imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/spotlight/styles.css";

//*                             *//
const Login = lazy(() => import('./components/LoginForm'));

// Define the routes
const routes = [
  {
    path: '/',
    element: <div>Welcome to the App! <a href="/login">Go to Login</a></div>,
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
];

// Create the router
const router = new Router({ routes });

function MainApp() { // Rename to avoid conflict
  return <RouterProvider router={router} />;
}

                  


// Render the app with MantineProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <MainApp />
    </MantineProvider>
  </StrictMode>
)

