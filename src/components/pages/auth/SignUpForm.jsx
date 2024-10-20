"use client"
import InputCustom from '@/components/common/Inputs/InputCustom';
import CommonButton from '@/components/common/Button/CommonButton';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import NavLink from '@/components/common/NavLink';
import { useRouter } from 'next/navigation';
import routes from '@/constants/routes';




const SignUpForm = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async () => {
            console.log( "hello");
        },
    });

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

                    <div className="w-100">
                        <CommonButton onClick={() => router.push(routes.HOME)} type="submit" title="Create Account" fluid />
                    </div>
                    <div className="anAccount mt-3 text-center">
                        <h6>Already have an account? <NavLink href={routes.LOGIN}>Login</NavLink></h6>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default SignUpForm
