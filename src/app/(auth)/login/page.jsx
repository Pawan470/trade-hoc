import logo from '../../../assets/images/logo.svg'
import { RightArrowIcon } from '@/assets/svgIcons/SvgIcon';
import NavLink from '@/components/common/NavLink';
import LoginForm from '@/components/pages/Login/LoginForm';
import './Login.scss';
import Image from 'next/image';
import LoginFooter from '@/components/pages/Login/LoginFooter';
import LoginHeading from '@/components/pages/Login/LoginHeading';
import ThirdPartyLogin from '@/components/pages/Login/ThirdPartyLogin';

const Login = () => {
  return (
    <>
      <div className="loginCommon_rightSide">
        <div className='loginCommon_rightSide_inner'>
          <div className='backbtn'>
              <NavLink href="/"><RightArrowIcon /> Return to Home</NavLink>
          </div>
          <div className='loginCommon_rightSide_formBox'>
            <div className='text-center mb-4 pb-xl-2'>
              <Image src={logo} alt="loginbg" />
            </div>
            <LoginHeading
              title="Log in with"
            />
            <ThirdPartyLogin />
            <div className="orLine">
              <span>or continue with</span>
            </div>
            <div className='loginTabs'>
              {/* <LoginForm /> */}
              <LoginForm />
            </div>
          </div>
          <div className='mt-4 mt-md-5'>
            <LoginFooter /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
