// import { Link, NavLink } from "react-router-dom"
import logo from "../../../../assets/images/logo.svg"
import { CartSideIcon, DollerIcon, LinkIcon, LockIcon, PaymentIcon, RightArrowIcon, SecurityIcon, SideEyeIcon, UserIcon  } from "@/assets/svgIcons/SvgIcon"
import NavLink from "@/components/common/NavLink"
import "./AccountSidebar.scss"
import Image from "next/image"
import routes from "@/constants/routes"

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
          <li><NavLink href={routes.OVERVIEW} ><span><SideEyeIcon /></span> Account Overview</NavLink></li>
          <li><NavLink href="detail"><span><UserIcon /></span> Account Details</NavLink></li>
          <li><NavLink href="subscriptions"><span><DollerIcon /></span> Subscriptions</NavLink></li>
          <li><NavLink href="security"><span><SecurityIcon /></span> Security</NavLink></li>
          <li><NavLink href="privacy"><span><LockIcon /></span> Privacy & Communication</NavLink></li>
          <li><NavLink href="connections"><span><LinkIcon /></span> Connections</NavLink></li>
          <li><NavLink href="payments"><span><PaymentIcon /></span> Payment Methods</NavLink></li>
          <li><NavLink href="transactions"><span><CartSideIcon /></span> Transaction history</NavLink></li>
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