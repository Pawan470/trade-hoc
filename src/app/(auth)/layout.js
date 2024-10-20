import { Container } from "react-bootstrap";
import loginbg from "../../assets/images/login-img.jpg";
import Image from "next/image";
import './authGlobals.scss'

function AuthLayout({ children }) {
  return (
    <div className="loginCommon">
      <Container fluid className="px-0">
        <div className="mx-0 d-flex flex-wrap">
          <div className="px-0 referralCol d-none d-lg-flex">
            <Image src={loginbg} alt="" />
          </div>
          <div className="px-0 loginCol">{children}</div>
        </div>
      </Container>
    </div>
  );
}

export default AuthLayout;
