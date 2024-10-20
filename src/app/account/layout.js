"use client"
import { useState } from "react";
import dynamic from 'next/dynamic'

const AccountSidebar = dynamic(() => import('@/components/pages/account/sidebar/AccountSidebar'))
const Header = dynamic(() => import('@/components/common/Header'))
const Footer = dynamic(() => import('@/components/common/Footer'))

import "./accountGlobal.scss"

const AccountLayout = ({ children }) => {
    const  [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive)
  }
    return (
        <>
        <Header />
            <div className="Account_layout">
                <div className="Account_layout_main">
                    <div className="Account_layout_leftaside">
                        <AccountSidebar onclick={toggleClass} isActive={isActive} toggleClass={toggleClass} />
                    </div>
                    <div className="Account_layout_rightaside">
                        <div className="filter_toggle">
                            <button onClick={toggleClass} className={"filter_toggle_btn " + (isActive ? "active" : "")}>
                                <span></span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AccountLayout