import NavLink from "@/components/common/NavLink";
import { CalculatorIcon, PlusIcon, RightArrowIcon } from "@/assets/svgIcons/SvgIcon";
import { useEffect, useRef, useState } from "react";
import "./AdminSidebar.scss"

const AdminSidebar = () => {
    const sliderRef = useRef(null);
    const [disableLeft, setDisableLeft] = useState(true);
    const [disableRight, setDisableRight] = useState(false);

    const isMobile = window.innerWidth = 768; // Define your mobile breakpoint
    const smoothScroll = (amount) => {
        if (sliderRef.current) {
            const start = sliderRef.current.scrollLeft;
            const end = start + amount;
            const duration = 300; // Duration in ms
            const startTime = performance.now();

            const step = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1); // Ensure we don’t overshoot the duration
                const scrollAmount = start + (end - start) * progress;

                sliderRef.current.scrollLeft = scrollAmount;

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        }
    };
    const scrollLeft = () => {
        if (isMobile) {
            smoothScroll(-260); // Scroll left by 260px
        }
    };

    const scrollRight = () => {
        if (isMobile) {
            smoothScroll(260); // Scroll right by 260px
        }
    };
    // Check scroll position
    const checkScrollPosition = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setDisableLeft(scrollLeft === 0);
            setDisableRight(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    // Add event listener to check scroll position when component mounts
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.addEventListener('scroll', checkScrollPosition);
        }
        return () => {
            if (sliderRef.current) {
                sliderRef.current.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);
    return (
        <>
            <div className="admin_sidebar">
                <button className={`scroll-btn left ${disableLeft ? 'disabled' : ''}`} disabled={disableLeft} onClick={scrollLeft}><RightArrowIcon /></button>
                <div className="admin_sidebar_wrapper" ref={sliderRef}>
                    <div className="linkList"><NavLink href="trade-manager"><span className="linktext">TM</span> <span className="fulltext">Trade Manager</span></NavLink></div>
                    <div className="linkList"><NavLink href="strategy-manager"><span className="linktext">SM</span> <span className="fulltext">Strategy Manager</span></NavLink></div>
                    <div className="linkList"><NavLink href="trading-calculator"><span className="linktext"><CalculatorIcon /></span> <span className="fulltext">Trading Calculators</span></NavLink></div>
                    <div className="linkList"><NavLink href="dashboard"><span className="linktext">1</span> <span className="fulltext"> Dashboard1</span></NavLink></div>
                    <div className="linkList"><NavLink href="#"><span className="linktext">2</span> <span className="fulltext">Dashboard2</span></NavLink></div>
                    <div className="linkList"><NavLink href="#"><span className="linktext">3</span> <span className="fulltext">Dashboard3</span></NavLink></div>
                    <div className="linkList"><NavLink href="#"><span className="linktext">4</span> <span className="fulltext">Dashboard4</span></NavLink></div>
                    <div className="linkList"><NavLink href="#"><span className="linktext">5</span> <span className="fulltext">Dashboard5</span></NavLink></div>
                    <div className="linkList"><NavLink href="#"><span className="linktext"><PlusIcon /></span> <span className="fulltext">Add Dashboard</span></NavLink></div>
                </div>
                <button className={`scroll-btn right ${disableRight ? 'disabled' : ''}`} disabled={disableRight} onClick={scrollRight}><RightArrowIcon /></button>
            </div>
        </>
    )
}

export default AdminSidebar
