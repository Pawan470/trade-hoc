import logo from '../../../assets/images/logo.svg'
import { RightArrowIcon } from '@/assets/svgIcons/SvgIcon';
import NavLink from '@/components/common/NavLink';
import LoginForm from '@/components/pages/auth/LoginForm';
import Image from 'next/image';
import LoginFooter from '@/components/pages/auth/LoginFooter';
import LoginHeading from '@/components/pages/auth/LoginHeading';
import ThirdPartyLogin from '@/components/pages/auth/ThirdPartyLogin';
import routes from '@/constants/routes';

const Login = () => {
  return (
    <>
      <div className="loginCommon_rightSide">
        <div className='loginCommon_rightSide_inner'>
          <div className='backbtn'>
              <NavLink href={routes.HOME}><RightArrowIcon /> Return to Home</NavLink>
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
