import { Dropdown } from 'react-bootstrap'
import { HelpIcon, PartnershipIcon, ReferIcon, SettingIcon, SignoutIcon, UserIcons } from '@/assets/svgIcons/SvgIcon'
import NavLink from '../NavLink'


const UserDropdown = ({ signIn }) => {
    return (
        <>
            <div>
                <Dropdown align={'end'} className='common_dropdown userDropdown'>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        <span className='user_icon'><UserIcons /></span> <span className='user_name'></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {signIn ? (
                            <>
                                <NavLink href="/login" className='dropdown-item'><SignoutIcon /> Sign Out</NavLink>
                                {/* <Link href="#" className='dropdown-item'><HelpIcon /> Refer A Friend</Link> */}
                                <NavLink href="/account-overview" className='dropdown-item white_icon'><SettingIcon /> Account Settings</NavLink>
                            </>
                        ) : (
                            <NavLink href="/login" className='dropdown-item'><SignoutIcon /> Log In</NavLink>
                        )}

                        <NavLink href="#" className='dropdown-item'><span><HelpIcon /></span> Help Center</NavLink>
                        <NavLink href="/partner" className='dropdown-item white_stroke_icon'><span><PartnershipIcon /></span> Partnership</NavLink>
                        <NavLink href="/refer-a-friend" className='dropdown-item'><span><ReferIcon /></span> Refer A Friend</NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}

export default UserDropdown