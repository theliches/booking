import React from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { getSupabaseClient } from "./supabase/getSupabaseClient";
import Sidebar from "../src/components/Sidebar"; // Import the Sidebar component
import { Paper, Group } from "@mantine/core"; // Using Mantine components for layout

// Create the router
export const router = createRouter({
  routeTree,
  context: {
    supabase: getSupabaseClient(),
  },
});

// Register router types
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <MantineProvider>
      <ModalsProvider>
        <RouterProvider
          router={router}
          context={{ supabase: getSupabaseClient() }}
        >
          {/* Layout with Sidebar and Main Content */}
          <Group spacing="lg" style={{ height: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <Paper style={{ flexGrow: 1, padding: "20px", background: "#F8F8F8" }}>
              {/* This will render the route's component */}
              <Outlet />
            </Paper>
          </Group>
        </RouterProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

