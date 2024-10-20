"use client";

import logo from "../../../assets/images/logo.svg";
import { RightArrowIcon } from "@/assets/svgIcons/SvgIcon";
import NavLink from "@/components/common/NavLink";
import Image from "next/image";
import LoginFooter from "@/components/pages/auth/LoginFooter";
import LoginHeading from "@/components/pages/auth/LoginHeading";
import ThirdPartyLogin from "@/components/pages/auth/ThirdPartyLogin";
import routes from "@/constants/routes";
import { Formik, Form, ErrorMessage } from "formik";
import CommonButton from "@/components/common/Button/CommonButton";
import InputCustom from "@/components/common/Inputs/InputCustom";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/validations/schema";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const handleSubmit =  (values) => {
    console.log(values);
    router.push("/account/overview");
  };

  return (
    <>
      <div className="loginCommon_rightSide">
        <div className="loginCommon_rightSide_inner">
          <div className="backbtn">
            <NavLink href={routes.HOME}>
              <RightArrowIcon /> Return to Home
            </NavLink>
          </div>
          <div className="loginCommon_rightSide_formBox">
            <div className="text-center mb-4 pb-xl-2">
              <Image src={logo} alt="loginbg" />
            </div>
            <LoginHeading title="Log in with" />
            <ThirdPartyLogin />
            <div className="orLine">
              <span>or continue with</span>
            </div>
            <div className="loginTabs">
              <div className="loginForm">
                <Formik
                  initialValues={initialValues}
                  validationSchema={loginSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, handleChange, touched, errors }) => (
                    <Form>
                      <InputCustom
                        placeholder="Email"
                        className=""
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        autoFocus={true}
                        value={values.email}
                        isInvalid={touched.email && !!errors.email}
                        error={
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="error-message"
                          />
                        }
                      />

                      <InputCustom
                        placeholder="Password"
                        id="password"
                        className=""
                        type="password"
                        onChange={handleChange}
                        autoFocus={true}
                        value={values.password}
                        isInvalid={touched.password && !!errors.password}
                        error={
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="error-message"
                          />
                        }
                      />

                      <div className="Forgotpassoword text-center pt-2 mb-4 pb-2">
                        <NavLink href="/forget">
                          Forgot password or can&apos;t log in
                        </NavLink>
                      </div>

                      <div className="w-100">
                        <CommonButton type="submit" title="Log In" fluid />
                      </div>
                      <div className="anAccount mt-3 text-center">
                        <h6>
                          <NavLink href={routes.SIGNUP}>
                            Create a free TradeReply Account
                          </NavLink>
                        </h6>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="mt-4 mt-md-5">
            <LoginFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
