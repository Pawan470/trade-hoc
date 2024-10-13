"use client"

import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import CommonButton from "@/components/common/Button/CommonButton";
import InputCustom from '@/components/common/Inputs/InputCustom';
import NavLink from "@/components/common/NavLink";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    // CREATE LOGIN SCHEMA USING YUP
    const loginSchema = Yup.object().shape({
        // EMAIL & PASSWORD VALIDATION
        password: Yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
            .required('Passeword is Required'),

        email: Yup.string()
            .email('Invalid email')
            .required('Invalid email'),
    });
    console.log(loginSchema);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async () => {
            console.log(loginSchema, "hello");
        },
    });

    // function handleClick() {
    //     navigate("verification");
    // }
    return (
        <>
            <div className="loginForm">
                <Form onSubmit={formik.handleSubmit}>
                    <InputCustom
                        // label="Email"
                        placeholder="Email"
                        className=""
                        id="email"
                        name="email"
                        type="eamil"
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        autoFocus={true}
                        value={formik.values.email}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        error={
                            formik.errors.email && formik.touched.email ? (
                                <span className="error-message">{formik.errors.email}</span>
                            ) : null
                        }
                    />
                    <InputCustom
                        // label="Password"
                        placeholder="Password"
                        id="password"
                        className=""
                        type="password"
                        onChange={formik.handleChange}
                        autoFocus={true}
                        value={formik.values.password}
                        isInvalid={formik.touched.password && !!formik.errors.password}
                        error={
                            formik.errors.password && formik.touched.password ? (
                                <span className="error-message">{formik.errors.password}</span>
                            ) : null
                        }
                    >
                    </InputCustom>
                    <div className="Forgotpassoword text-center pt-2 mb-4 pb-2">
                        <NavLink href="/locate-account">Forgot password or can&apos;t log in</NavLink>
                    </div>

                    {/* <div className="d-flex mb-4 pb-2">
                        <FormCheck
                            type="checkbox"
                        />
                        <p className="ms-3">I agree to your <Link to="#">terms & conditions</Link> and <Link to="#">privacy policy</Link></p>
                    </div> */}

                    <div className="w-100">
                        <CommonButton onClick={() => router.push("/")} type="submit" title="Log In" fluid />
                    </div>
                    <div className="anAccount mt-3 text-center">
                        <h6><NavLink href="/signup">Create a free TradeReply Account</NavLink></h6>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default LoginForm
