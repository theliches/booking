import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export interface RouterContext {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

function RootRouteWithLayout() {
  return (
    <>
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/">About</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
