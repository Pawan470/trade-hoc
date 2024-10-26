"use client"
import { Col, Container, Row } from "react-bootstrap"
import stockimg from "../../../assets/images/stockimg.png"
import logimg from "../../../assets/images/logimg.png"
import whyimg from "../../../assets/images/TradeReply-70-percent_Features.png"
import buildimg from "../../../assets/images/buildimg.png"
import dashboardimg from "../../../assets/images/dashboardimg.png"
import CommonButton from "@/components/common/Button/CommonButton"
import { CheckIcon } from "../../../assets/svgIcons/SvgIcon"
import Testimonials from "@/components/pages/Home/Testimonials/Testimonials"
import AnswerTrades from "@/components/pages/Home/AnswerTrades/AnswerTrades"
import { useRouter } from "next/navigation"
import Image from "next/image"
import "./Features.scss"


const Features = () => {
    const router = useRouter()

    const listitem = [
        {
            features: [
                "On-the-Go Learning Support",
                "Multiple Trade Accounts",
                "Dynamic Dashboards",
                "Strategy Building",
                "Chart & KPI Widgets",
                "Advanced Filters",
                "Analytics Presets",
            ],
        },
        {
            features: [
                "Autosync Brokers",
                "CSV Trade Import",
                "Widget Customization",
                "Marketplace Access",
                "Upload Chart Images",
                "Heatmaps",
                "Trade Tagging",
            ],
        },
        {
            features: [
                "Advanced Dimensions",
                "Trade Calculators",
                "Intuitive Trade Building",
                "Accurate Dates & Times",
                "Fast Web Servers",
                "Social Networking",
                "Drill Down Metrics",
            ],
        },
    ]
    return (
        <>
            <div className="py-100 features">
                <Container>
                    <div className="features_inner">
                        <section className="text-center features_stock">
                            <h1>Stock Trade Analy<span className="blue_text">sis</span></h1>
                            <div className="mt-5 pt-xl-4">
                                <Image src={stockimg} alt="stockimg" />
                            </div>
                        </section>
                        <section className="features_yourTrade py-100">
                            <AnswerTrades />
                        </section>
                        <section className="text-center features_logSync">
                            <div className="features_heading">
                                <h2>Log & Sync Trades</h2>
                                <h4 className="mt-4">
                                    Effortlessly log and sync all your trades ensuring accurate records
                                    and up-to-date performance metrics across all your accounts.
                                </h4>
                            </div>
                            <div className="mt-5 pt-xl-4">
                                <Image src={logimg} alt="logimg" />
                            </div>
                        </section>
                        <section className="text-center features_whyUse py-100">
                            <div className="features_heading">
                                <h2>Why Use TradeReply?</h2>
                                <h4 className="mt-4">
                                    70% of traders who use data analytics are  <span className="green_text">successful</span> <br />
                                    70% of traders who do NOT use data analytics <span className="red_text">fail</span>

                                </h4>
                            </div>
                            <div className="mt-5 pt-xl-4">
                                <Image src={whyimg} alt="whyimg" />
                            </div>
                        </section>
                        <section className="features_testimonial">
                            <Testimonials />
                            <div className="mt-0 text-center">
                                <CommonButton onClick={() => router.push("/pricing")} title="Optimize Trading" className="px-xl-5" />
                            </div>
                        </section>
                        <section className="text-center features_BuildTrade py-100">
                            <div className="features_heading">
                                <h2>Build Trading Strategies</h2>
                                <h4 className="mt-4">
                                    Create and optimize trading strategies using advanced tools and historical data for effective, data-driven plans tailored to your goals.
                                </h4>
                            </div>
                            <div className="mt-5 pt-xl-4">
                                <Image src={buildimg} alt="logimg" />
                            </div>
                        </section>
                        <section className="text-center features_Personalized py-100">
                            <div className="features_heading">
                                <h2>Personalized Dashboards</h2>
                                <h4 className="mt-4">
                                    Add KPI widgets, and filter by metrics, strategies, trades, tickers, accounts, and more for customized trading dashboards.
                                </h4>
                            </div>
                            <div className="mt-5 pt-xl-4">
                                <Image src={dashboardimg} alt="dashboardimg" />
                            </div>
                        </section>
                        <section className="features_transformsec">
                            <Row>
                                {listitem?.map((item , index) => {
                                    return (
                                        <Col md={4} xs={12} key={index}>
                                            <ul>
                                                {item?.features?.map((list) => {
                                                    return (
                                                        <li key={list}><CheckIcon /> {list}</li>
                                                    )
                                                })}
                                            </ul>
                                        </Col>
                                    )
                                })}
                            </Row>
                            <div className="features_heading mt-5 pt-xl-5 text-center">
                                <h2>Ready to Transform Your Trading?</h2>
                                <h4 className="mt-4">
                                    Harness the power of advanced analytics and personalized dashboards to revolutionize your trading experience.
                                </h4>
                                <div className="mt-4 mt-md-5">
                                    <CommonButton onClick={() => router.push("/signup")} title="Join Free, Upgrade Anytime" className="px-xl-5 green-btn" />
                                </div>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Features