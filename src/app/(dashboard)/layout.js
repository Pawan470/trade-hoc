"use client";

import dynamic from "next/dynamic";
const AdminSidebar = dynamic(() =>
  import("@/components/pages/Admin/AdminSidebar/AdminSidebar")
);
const Header = dynamic(() => import("@/components/common/Header"));
const Footer = dynamic(() => import("@/components/common/Footer"));
import "./AdminLayout.scss";

const AccountLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="admin_layout">
        <div className="admin_layout_sidebar">
          <AdminSidebar />
        </div>
        <div className="admin_layout_content">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default AccountLayout;
