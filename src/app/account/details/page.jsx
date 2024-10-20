import { Col, Row } from "react-bootstrap"
import SidebarHeading from "@/components/pages/account/SidebarHeading/SidebarHeading"
import CommonBlackCard from  "@/components/common/CommonBlackCard"
import { EditIcon, PlusIcon} from "@/assets/svgIcons/SvgIcon"
import "./AccountDetails.scss"


const AccountDetails = () => {

  return (
    <>
      <div className='account_details'>
        <SidebarHeading
          title="Account Details"
        />

        <Row>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Personal Information"
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card"
            >
              <div className="account_card_list">
                <ul>
                  <li><span>Name </span> A**** M****</li>
                  <li><span>Country/Region </span> United Statesm</li>
                </ul>
              </div>
            </CommonBlackCard>
          </Col>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Localization Settings"
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card"
            >
              <div className="account_card_list">
                <ul>
                  <li><span>Language </span> English(USA)</li>
                  <li><span>Timezone </span> -4 UTC (New York)</li>
                  <li><span>Currency </span> USD</li>
                  <li><span>Stock Units </span> Shares</li>
                  <li><span>Crupto Units </span> Whole Units</li>
                </ul>
              </div>
            </CommonBlackCard>
          </Col>
          <Col lg={12} xs={12} className="d-flex mb-4 mb-lg-4">
            <CommonBlackCard
              title="Phone Number"
              Linktext="Add Phone Number"
              editicon={<PlusIcon />}
              className="account_card pullcontent add_plusicon"
              text="Use your phone number to log in to your account."
            >
              <div className="account_card_list">
                <ul>
                  <li><span>Phone Number </span> <button className="add_phone_number" type="button">Add Phone Number</button></li>
                </ul>
              </div>
            </CommonBlackCard>
          </Col>
          <Col lg={12} xs={12} className="d-flex">
            <CommonBlackCard
              title="Email"
              Linktext="Update"
              editicon={<EditIcon />}
              className="account_card"
            >
              <div className="account_card_list">
                <ul>
                  <li><span>Email </span> a**********@yahooo.com</li>
                </ul>
              </div>
            </CommonBlackCard>
          </Col>          
        </Row>
      </div>
    </>
  )
}

export default  AccountDetails