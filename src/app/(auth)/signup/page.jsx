"use client";

import LoginFooter from "@/components/pages/auth/LoginFooter";
import LoginHeading from "@/components/pages/auth/LoginHeading";
import CommonButton from "@/components/common/Button/CommonButton";
import ThirdPartyLogin from "@/components/pages/auth/ThirdPartyLogin";
import NavLink from "@/components/common/NavLink";
import InputCustom from "@/components/common/Inputs/InputCustom";
import routes from "@/constants/routes";
import logo from "../../../assets/images/logo.svg";
import { RightArrowIcon } from "@/assets/svgIcons/SvgIcon";
import { useRouter } from "next/navigation";
import { useSignupMutation } from "@/services/auth";
import useToHandleApiError from "@/hooks/useToHandleApiError";
import { signupSchema } from "@/validations/schema";
import { Formik, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import Image from "next/image";
import "./signUp.scss";

const initialValues = {
  email: "",
  password: "",
};

const SignUp = () => {
  const router = useRouter();
  const mutation = useSignupMutation();
  useToHandleApiError(mutation?.error);

  const handleSubmit = async (values) => {
    await mutation.mutateAsync(values);
    router.push(routes.DETAILS);
  };

  return (
    <div className="loginCommon_rightSide signup_form">
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
          <LoginHeading title="Sign up with" />
          <ThirdPartyLogin />
          <div className="orLine">
            <span>or start with</span>
          </div>
          <div className="loginTabs">
            <div className="loginForm">
              <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={handleSubmit}
              >
                {({ values, handleChange, handleBlur, handleSubmit , touched, errors , }) => (
                  <Form onSubmit={handleSubmit}>
                    <InputCustom
                      placeholder="Email"
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
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

                    <div className="w-100">
                      <CommonButton type="submit" title="Create Account" fluid  />
                    </div>

                    <div className="anAccount mt-3 text-center">
                        <h6>Already have an account? <NavLink href="/login">Login </NavLink></h6>
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
  );
};

export default SignUp;
