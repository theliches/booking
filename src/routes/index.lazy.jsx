import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import { lazy } from "react";
import LoginPage from "./login.lazy";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
export default LoginPage;