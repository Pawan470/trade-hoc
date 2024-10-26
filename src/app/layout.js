"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "@/store/Provider";
import useAuth from "@/hooks/useAuth";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <QueryClientProvider client={queryClient}>
            <MainLayout>{children}</MainLayout>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const MainLayout = ({ children }) => {
  const { isPending , isError , error } = useAuth();
  if(isPending) return <p>Loading...</p>
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <Toaster />
      {children}
    </>
  );
};
