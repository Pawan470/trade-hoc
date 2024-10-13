import { Col, Container, Row } from "react-bootstrap";
import {
  DashboardIcon,
  DynamicIcon,
  FilterIcon,
  RoketIcon,
} from "@/assets/svgIcons/SvgIcon";
import { useRouter } from "next/navigation";
import CommonHeading from "@/components/common/CommonHeading/CommonHeading";
import CommonButton from "@/components/common/Button/CommonButton";
import logoicon from "../../../../assets/images/Logo-Icon.svg";
import "./AnswerTrades.scss";
import Image from "next/image";

const AnswerTrades = () => {
  const router = useRouter();

  const tradedata = [
    {
      icon: <RoketIcon />,
      title: "100+ Metrics",
      content:
        "Comprehensive metrics for detailed trade performance analysis and insights.",
    },
    {
      icon: <FilterIcon />,
      title: "Advanced Filtering",
      content:
        "Customize data views with multi- dimensional filtering options.",
    },
    {
      icon: <DashboardIcon />,
      title: "Flexible Dashboards",
      content:
        "Multilple accounts & dashboards tailored to individual strategies and goals.",
    },
    {
      icon: <DynamicIcon />,
      title: "Dynamic Visuals",
      content:
        "Use interactive graphs for in-depth trading performance analysis.",
    },
  ];

  return (
    <>
      <section className="answer_trades">
        <Container>
          <div className="answer_trades_heading">
            <CommonHeading heading="Answer Your Trades." centered />
            <h3>#TradeReply</h3>
          </div>
          <div className="answer_trades_logoicon text-center">
            <Image src={logoicon} alt="icon" />
          </div>
          <div className="answer_trades_contentbox">
            <Row>
              {tradedata.map((item, index) => (
                <Col xs={12} sm={6} lg={3} key={index}>
                  <div className="answer_trades_contentbox_content text-center">
                    <span>{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="text-center">
            <CommonButton
              onClick={() => router.push("/pricing")}
              className="green-btn"
              title="Join Free, Upgrade Anytime"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AnswerTrades;
