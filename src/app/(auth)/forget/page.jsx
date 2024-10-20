"use client"

import logo from '../../../assets/images/logo.svg'
import LoginFooter from '@/components/pages/auth/LoginFooter';
import LoginHeading from '@/components/pages/auth/LoginHeading';
import ForgotForm from '@/components/pages/auth/ForgotForm';
import { RightArrowIcon } from '@/assets/svgIcons/SvgIcon';
import NavLink from '@/components/common/NavLink';
import Image from 'next/image';
import routes from '@/constants/routes';
import './forget.scss';


 const  ForgetPassword = () => {
  return (
    <div className="loginCommon_rightSide">
    <div className='loginCommon_rightSide_inner'>
      <div className='backbtn'>
        <NavLink href={routes.HOME}><RightArrowIcon /> Return to Home</NavLink>
      </div>
      <div className='loginCommon_rightSide_formBox forgot_form'>
        <div className='text-center mb-4 pb-xl-2'>
          <Image src={logo} alt="loginbg" />
        </div>
        <LoginHeading
          title="Locate Your Account"
        />
        <div className="orLine">
          <span>Enter your email or username</span>
        </div>
        <div className='loginTabs'>
          <ForgotForm />
        </div>
      </div>
      <div className='mt-4 mt-md-5'>
        <LoginFooter />
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword