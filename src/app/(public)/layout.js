"use client";

import Header from "@/components/common/Header";
import { Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/common/Footer";

const Publiclayout = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }

    return () => {
      document.body.classList.remove("home-page");
    };
  }, [pathname]);

  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Publiclayout;
