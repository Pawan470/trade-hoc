import { Form } from "react-bootstrap"

const FormCheck = ({ disabled, type, label, className }: any) => {
    return (
        <>
            <div className={`checkbox_input ${className}`}>
                <Form.Check
                    disabled={disabled}
                    label={label}
                    type={type}
                    id={`inline-${type}-3`}
                    className="form-check"
                />
            </div>
        </>
    )
}

export default FormCheck
