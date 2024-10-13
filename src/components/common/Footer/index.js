import { Col, Container, Row } from "react-bootstrap"
import logo from "../../../assets/images/logo.svg"
import NavLink from "../NavLink"
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <div className="site_footer">
                <div className="site_footer_inner">
                    <Container>
                        <Row className="gx-xl-5">
                            <Col md={4} sm={12} xs={12}>
                                <div className="site_footer_content">
                                    <div className="site_footer_logo">
                                       <NavLink href="/"><img src={logo} alt="" /></NavLink>
                                    </div>
                                    <p>TradeReply is a revolutionary anafytics suite that enables crypts and stock traders to input historical trading data and harness powerful visual l(Pls, graphs, and metrics for optimizing and building trade strategies with real-time insights.
                                    </p>
                                </div>
                            </Col>
                            <Col md={8} sm={12} xs={12}>
                                <Row>
                                    <Col md={4} sm={4} xs={6}>
                                        <div className="site_footer_links">
                                            <h4>Company</h4>
                                            <ul>
                                                <li><NavLink href="#">Contact</NavLink></li>
                                                <li><NavLink href="/brand-assets">Brand Assets</NavLink></li>
                                                <li><NavLink href="/accessibility">Accessibility</NavLink></li>
                                                <li><NavLink href="/privacy">Privacy Policy</NavLink></li>
                                                <li><NavLink href="/cookies">Cookies Policy</NavLink></li>
                                                <li><NavLink href="/terms">Terms & Conditions</NavLink></li>
                                                <li><NavLink href="/disclaimer">Disclaimer</NavLink></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={4} xs={6}>
                                        <div className="site_footer_links">
                                            <h4>Partners</h4>
                                            <ul>
                                                <li><NavLink href="/refer-a-friend">Refer a Friend</NavLink></li>
                                                <li><NavLink href="/partner">Partner Program</NavLink></li>
                                                <li><NavLink href="/advertising">Advertising</NavLink></li>
                                                <li><NavLink href="/features">Features</NavLink></li>
                                                <li><NavLink href="/education">Education</NavLink></li>
                                                <li><NavLink href="/brokers">Brokers</NavLink></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={4} xs={6}>
                                        <div className="site_footer_links">
                                            <h4>Community</h4>
                                            <ul>
                                                <li><NavLink href="#">Help Center</NavLink></li>
                                                <li><NavLink href="/sitemap">Sitemap</NavLink></li>
                                                <li><NavLink href="/pricing">Pricing</NavLink></li> 
                                                <li><NavLink href="/blog">Blog</NavLink></li>
                                                <li><NavLink href="/status">Status</NavLink></li>
                                                <li><NavLink href="#">Feedback/Bugs</NavLink></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="site_footer_copyright">
                    <Container>
                        <p>Copyright © 2024 TradeReply. All Rights Reserved.</p>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Footer