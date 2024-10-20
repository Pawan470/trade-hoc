"use client"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

const queryClient = new QueryClient();

const MainLayout = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
