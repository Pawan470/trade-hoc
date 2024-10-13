import { Container } from "react-bootstrap"
import "./BannerSec.scss"
import overlayimg from "../../../../assets/images/overlayImg.png"
import CommonSearch from "@/components/common/Search/CommonSearch"
import Image from "next/image"

const BannerSec = () => {
    return (
            <section className="banner_sec">
                <Container>
                    <div className="banner_sec_content">
                        <h1>Empowering Traders with Performance Analytics.</h1>
                    </div>
                </Container>
                <div className="banner_sec_search">
                    <CommonSearch
                        label="Crypto & Stock Trading KPIs"
                        placeholder="Explore Key Terms & Concepts"
                        icon={true}
                    />
                </div>
                <div className="banner_sec_overlayimg">
                    <div>
                        <Image className="d-none d-md-block" src={overlayimg} alt="sss" height={555} />
                    </div>
                </div>
            </section>
    )
}

export default BannerSec
