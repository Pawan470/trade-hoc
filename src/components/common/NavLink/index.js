"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className  , }, ...props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkClassName = isActive
    ? `${className} active`.trim()
    : className;

  return (
    <Link href={href} className={linkClassName} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
