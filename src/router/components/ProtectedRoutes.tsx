import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

import useAuthStore from "@/auth/store/auth.store";

import SplashScreen from "@/components/shared/SplashScreen";

const AdminRoute = function ({ children }: PropsWithChildren) {
  const { authStatus, isAdmin } = useAuthStore();

  if (authStatus === "checking") return <SplashScreen />;
  if (authStatus === "not-authenticated") {
    return <Navigate to="/auth/login" replace />;
  }

  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AuthenticatedRoute = function ({ children }: PropsWithChildren) {
  const { authStatus } = useAuthStore();

  if (authStatus === "checking") return <SplashScreen />;
  if (authStatus === "not-authenticated") {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

const NotAuthenticatedRoute = function ({ children }: PropsWithChildren) {
  const { authStatus } = useAuthStore();

  if (authStatus === "checking") return <SplashScreen />;
  if (authStatus === "authenticated") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export { AdminRoute, AuthenticatedRoute, NotAuthenticatedRoute };
