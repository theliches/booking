import React, { Suspense } from "react";

// Lazy-load the LoginPage component
const LoginPage = React.lazy(() => import("../components/LoginForm.jsx"));


const LoginLazy = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Loading.. */}
      <LoginPage />
    </Suspense>
  );
};

export default LoginLazy;
