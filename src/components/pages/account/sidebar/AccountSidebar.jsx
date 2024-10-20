// import { Link, NavLink } from "react-router-dom"
import logo from "../../../../assets/images/logo.svg"
import { CartSideIcon, DollerIcon, LinkIcon, LockIcon, PaymentIcon, RightArrowIcon, SecurityIcon, SideEyeIcon, UserIcon  } from "@/assets/svgIcons/SvgIcon"
import NavLink from "@/components/common/NavLink"
import "./AccountSidebar.scss"
import Image from "next/image"
import routes from "@/constants/routes"


const navItems = [
  { href: routes.OVERVIEW, label: "Account Overview", icon: <SideEyeIcon /> },
  { href: routes.DETAILS, label: "Account Details", icon: <UserIcon /> },
  { href: routes.SUBSCRIPTIONS, label: "Subscriptions", icon: <DollerIcon /> },
  { href: routes.SECURITY, label: "Security", icon: <SecurityIcon /> },
  { href: routes.PRIVACY, label: "Privacy & Communication", icon: <LockIcon /> },
  { href: routes.CONNECTIONS, label: "Connections", icon: <LinkIcon /> },
  { href: routes.PAYMENTS, label: "Payment Methods", icon: <PaymentIcon /> },
  { href: routes.TRANSACTIONS, label: "Transaction History", icon: <CartSideIcon /> },
];


const AccountSidebar = ({ className, isActive, toggleClass }) => {

  return (
    <>
      <div onClick={toggleClass} className={isActive ? "d-xl-none sidebar_backdrop" : " d-xl-none"} />
      <div className={`Account_sidebar ${isActive ? "opensidebar" : ""} ${className}`}>
        <div className="Account_sidebar_head">
          <NavLink href="/" className="headLogo d-block d-xl-none">
              <Image src={logo} alt="" />
          </NavLink>
          <div className="filter_toggle">
            <button onClick={toggleClass} className={"filter_toggle_btn " + (isActive ? "active" : "")}>
              <span></span>
            </button>
          </div>
        </div>
        <ul> 
        {navItems.map((item) => (
        <li key={item.href}>
          <NavLink href={item.href}>
            <span>{item.icon}</span> {item.label}
          </NavLink>
        </li>
      ))}
        </ul>
        <div className="Account_sidebar_bottom_link">
          <ul>
            <li><NavLink href="/refer-a-friend">Refer a friend <RightArrowIcon /></NavLink></li>
            <li><NavLink href="#">Affiliate Center <RightArrowIcon /></NavLink></li>
            <li><NavLink href="#">Help Center <RightArrowIcon /></NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AccountSidebar