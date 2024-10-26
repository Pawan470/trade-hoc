import { Col, Container, Row } from "react-bootstrap"
import AdminHeading from "@/components/pages/Admin/AdminHeading/AdminHeading"
import CommonHead from "@/components/pages/Admin/CommonHead/CommonHead"
import chart from "../../../assets/images/grap.png"
import evalicon from "../../../assets/images/evaluation_img.png"
import { PlusIcon, SettingIcon, TradeIcon} from "@/assets/svgIcons/SvgIcon"
import "./Dashboard.scss"
import Image from "next/image"


const Dashboard = () => {
    const overviewbox = [
        {
            text: "Success Score: 97%",
            score: true,
        },
        {
            text: "Evaluation : 50%",
            evaluation: true,
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    return (
        <>
            <div className="dashboard">
                <Container>
                    <CommonHead />
                    <div className="trade_head justify-content-center mb-0 py-40">
                        <AdminHeading heading="Account Overview" centered />
                        <button className="setting_btn" type="button"><SettingIcon /></button>
                    </div>
                    <Row className="dashboard_card gx-xl-5">
                        {overviewbox.map((item, index) => (
                            <Col lg={4} sm={6} md={4} xs={12} key={index} className="d-flex">
                                <div className={`overview_box w-100 ${item?.score ? "scorebox darkbox" : ""} ${item?.evaluation ? "evalbox darkbox" : ""}`}>
                                    {item?.score && (
                                        <div className="overview_box_fillbox">
                                            <span className="mt-3"><TradeIcon /></span>
                                            <h4 className="my-3">{item?.text}</h4>
                                            <figure>
                                                <Image src={chart} alt="chart" />
                                            </figure>
                                        </div>
                                    )}
                                    {item?.evaluation && (
                                        <div className="overview_box_fillbox">
                                            <h4 className="mb-4">{item?.text}</h4>
                                            <figure>
                                                <Image src={evalicon} alt="evalicon" />
                                            </figure>
                                        </div>
                                    )}
                                    {!item?.score && !item?.evaluation && (
                                        <button type="button" className="overview_box_icon">
                                            <PlusIcon />
                                        </button>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Dashboard