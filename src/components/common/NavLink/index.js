"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className, activeClassName }, ...props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <Link href={href} className={linkClassName} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
