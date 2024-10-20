import LoginFooter from '@/components/pages/auth/LoginFooter';
import LoginHeading from '@/components/pages/auth/LoginHeading';
import logo from '../../../assets/images/logo.svg'
import ThirdPartyLogin from '@/components/pages/auth/ThirdPartyLogin';
import SignUpForm from '@/components/pages/auth/SignUpForm';
import NavLink from '@/components/common/NavLink';
import { RightArrowIcon } from '@/assets/svgIcons/SvgIcon';
import routes from '@/constants/routes';
import './signUp.scss';


const SignUp = () => {
  return (
    <>
      <div className="loginCommon_rightSide signup_form">
        <div className='loginCommon_rightSide_inner'>
          <div className='backbtn'>
            <NavLink href={routes.HOME}><RightArrowIcon /> Return to Home</NavLink>
          </div>
          <div className='loginCommon_rightSide_formBox'>
            <div className='text-center mb-4 pb-xl-2'>
              <img src={logo} alt="loginbg" />
            </div>
            <LoginHeading
              title="Sign up with"
            />
            <ThirdPartyLogin />
            <div className="orLine">
              <span>or start with</span>
            </div>
            <div className='loginTabs'>
              <SignUpForm />
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

export default SignUp;
