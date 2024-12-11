import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import DashboardPage from "./dashboard.lazy";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const context = useRouteContext({ from: "/about" });
  console.log(context);

  return <div>Hello from About!</div>;
}
export default DashboardPage;