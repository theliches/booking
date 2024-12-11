import React from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { getSupabaseClient } from "./supabase/getSupabaseClient";

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
        </RouterProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

