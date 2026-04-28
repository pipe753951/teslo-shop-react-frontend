import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "sonner";

const queryClient = new QueryClient();

const App = function () {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
