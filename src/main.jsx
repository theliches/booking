import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./global.css";  // Import the global CSS here
import App from "./App";

// Mantine CSS Imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/spotlight/styles.css";

import React from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import routes from "./router"; // Import the routes

const router = createRouter({
  routes, // Pass the routes here
});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

// Render the app with MantineProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>
);
