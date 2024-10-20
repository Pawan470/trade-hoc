import InputCustom from '@/components/common/Inputs/InputCustom';
import CommonButton from '@/components/common/Button/CommonButton';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import NavLink from '@/components/common/NavLink';
import { useRouter } from 'next/navigation';

const ForgotForm = () => {
    const router = useRouter()


    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit:  () => {
            console.log("hello");
        },
    });

    return (
        <>
            <div className="loginForm">
                <Form onSubmit={formik.handleSubmit}>
                    <InputCustom
                        placeholder="Email or username"
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

                    <div className="w-100 pt-3">
                        <CommonButton onClick={() => router.push("/forget")} type="submit" title="Locate Account" fluid />
                    </div>

                    <div className="pt-4">
                        <p className="text-center login_fontStyle"><NavLink href="/login">Return to Login</NavLink></p>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default ForgotForm
