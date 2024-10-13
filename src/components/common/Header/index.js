"use client"
import  { useRef, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import NavLink from '../NavLink';
import CommonButton from '../Button/CommonButton';
import logo from '../../../assets/images/logo.svg'
import LanguageDropdown from './LanguageDropdown';
import UserDropdown from './UserDropdown';
import { HelpIcon, PartnershipIcon, ReferIcon, SignoutIcon } from '@/assets/svgIcons/SvgIcon';
import { useRouter } from "next/navigation";
import './Header.scss';
import Image from 'next/image';


const Header = ({ signIn }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const ref = useRef();

    const toggleClass = () => setIsActive(!isActive);
    const handleMouseEnter = () => setIsOpen(true); 
    const handleMouseLeave = () => setIsOpen(false); 

    const onclick = () => {
        if (ref.current && document.body.clientWidth < 1222299) {
            ref.current.click();
        }
    };

  

    const handleClick = () => {
        if (window.innerWidth < 1200) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            <header className={isActive ? 'siteHeader openmenu' : 'siteHeader'}>
                <Navbar expand="xl">
                    <Container className="">
                        <div className='d-flex align-items-center'>
                            <Navbar.Toggle ref={ref} onClick={toggleClass} />
                            <NavLink href="/" className="brandLogo">
                                <Image src={logo} alt="" />
                            </NavLink>
                        </div>
                        <Navbar.Collapse className="justify-content-center">
                            <div className=' d-flex justify-content-center align-items-center openmenuSidebar'>
                                <NavLink onClick={onclick} href="/" className="brandLogo d-bloc d-xl-none">
                                    <div className="LogoIconanimte">
                                        <Image src={logo} alt="" />
                                    </div>
                                </NavLink>
                                <Navbar.Toggle ref={ref} onClick={toggleClass} />
                            </div>
                            <div className='navMenu d-xl-flex'>
                                <NavLink onClick={onclick} href="/market" className="nav-link">
                                    Market
                                </NavLink>
                                <div
                                    className={`nav-item common_dropdown dropdown ${isOpen ? 'show' : ''}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleClick}
                                >
                                    <NavLink
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded={isOpen ? 'true' : 'false'}
                                    >
                                        Products
                                    </NavLink>
                                    <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <NavLink onClick={onclick} className="nav-link" href="/trading-calculator"> Trading Calculators</NavLink>
                                        <NavLink onClick={onclick} className="nav-link" href="/features">Features</NavLink>
                                        <NavLink onClick={onclick} className="nav-link" href="/pricing">Pricing</NavLink>
                                    </div>
                                </div>

                                <NavLink onClick={onclick} href="/education" className="nav-link">
                                    Education
                                </NavLink>
                                <NavLink onClick={onclick} href="/blog" className="nav-link">
                                    Blog
                                </NavLink>
                                <div className='languageMenu'>
                                    <div className='d-block d-xl-none'>
                                        <LanguageDropdown />
                                    </div>
                                    <div className='d-block d-xl-none'>
                                        {/* <UserDropdown /> */}
                                        {signIn ? (
                                            <>
                                                <NavLink href="/login" className='nav-link'><span className='me-3'><SignoutIcon /></span> Sign Out</NavLink>
                                                {/* <NavLink href="/account-overview" className='dropdown-item white_icon'><SettingIcon /> Account Settings</NavLink> */}
                                            </>
                                        ) : (
                                            <NavLink href="/login" className='nav-link'><span className='me-3'><SignoutIcon /></span> Log In</NavLink>
                                        )}

                                        <NavLink href="#" className='nav-link'><span className='me-3'><HelpIcon /></span> Help Center</NavLink>
                                        <NavLink href="/partner" className='nav-link white_stroke_icon'><span className='me-3'><PartnershipIcon /></span> Partnership</NavLink>
                                        <NavLink href="/refer-a-friend" className='nav-link'><span className='me-3'><ReferIcon /></span> Refer A Friend</NavLink>
                                    </div>
                                </div>
                            </div>
                        </Navbar.Collapse>

                        {isActive && <div onClick={onclick} className={`${isActive ? 'active' : ''} sidebar_backdrop d-xl-none`} />}

                        <div className="d-flex align-items-center justify-content-between">
                            <div className='d-none d-xl-block'>
                                <LanguageDropdown />
                            </div>
                            <div className='mx-2 mx-xl-4 pe-xl-4 d-none d-xl-block'>
                                <UserDropdown />
                            </div>
                            <CommonButton onClick={() => router.push('/pricing')} className="gradient-btn" title="Get started" />
                        </div>
                    </Container>
                </Navbar>
            </header>
            {/* <ScrollToTop /> */}
        </>
    );
};

export default Header;
