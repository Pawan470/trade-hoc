import { Breadcrumb } from "react-bootstrap"
import NavLink from "../NavLink"
import "./CustomBreadcrumb.scss"

const CustomBreadcrumb = ({ to, linkname, pagename }) => {
    return (
        <>
            <div className="custom_breadcrumb">
                <Breadcrumb>
                    <li className="breadcrumb-item home-item"><NavLink href="/">Home</NavLink></li>
                    <li className="breadcrumb-item secondary_link"><NavLink href={to}>{linkname}</NavLink></li>
                    <Breadcrumb.Item active>{pagename}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </>
    )
}

export default CustomBreadcrumb