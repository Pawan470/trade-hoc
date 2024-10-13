import NavLink from "@/components/common/NavLink"

const LoginFooter = () => {
    return (
        <>
            <div className='login_footer text-center mt-4 mt-md-5'>
                <div className='login_footer_links d-flex flex-wrap'>
                    <NavLink href="/privacy">Privacy</NavLink>
                    <NavLink href="/terms">Terms</NavLink>
                    <NavLink href="/disclaimer">Disclaimer</NavLink>
                    <NavLink href="/cookies">Cookies</NavLink>
                    <NavLink href="#">Cookie Settings</NavLink>
                </div>
                <p>Copyright © 2024 TradeReply. All Rights Reserved.</p>
            </div>
        </>
    ) 
}

export default LoginFooter
