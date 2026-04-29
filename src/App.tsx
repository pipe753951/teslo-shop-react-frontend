import type { PropsWithChildren } from "react";
import { RouterProvider } from "react-router";

import {
  QueryClient,
  QueryClientProvider,
  queryOptions,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "sonner";

import { appRouter } from "./router/app.router";

import useAuthStore from "./auth/store/auth.store";

import SplashScreen from "./components/shared/SplashScreen";

const queryClient = new QueryClient();

const CheckAuthProvider = function ({ children }: PropsWithChildren) {
  const { checkAuthStatus } = useAuthStore();
  const { isLoading } = useQuery(
    queryOptions({
      queryKey: ["auth"],
      queryFn: checkAuthStatus,
      staleTime: 300000, //* 1000ms * 60s * 5m
      retry: false,
      refetchInterval: 5400000, //* 1000ms * 60s * 60h * 1.5h
      refetchOnWindowFocus: true,
    }),
  );

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
};

const App = function () {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />

        <CheckAuthProvider>
          <RouterProvider router={appRouter} />
        </CheckAuthProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
