import { Container } from "react-bootstrap"
import CommonHeading from "@/components/common/CommonHeading/CommonHeading"
import eduImg from "../../../../assets/images/education_img.jpg"
import eduImg1 from "../../../../assets/images/education_img2.jpg"
import NavLink from "@/components/common/NavLink"
import "./LearningResources.scss"
import Image from "next/image"

const LearningResources = () => {
    return (
        <>
            <section className="learning_resources">
                <Container>
                    <div className="learning_resources_heading">
                        <CommonHeading
                            heading="Learning Resources"
                        />
                        <p>Explore our Comprehensive industry definitions and guides to enhance your trading knowledge.</p>
                    </div>
                    <div className="learning_resources_content">
                        <div className="learning_resources_content_col">
                            <NavLink href="/education" className="learning_resources_content_card">
                                <Image src={eduImg} alt="img" />
                                <h3>Education</h3>
                            </NavLink>
                        </div>
                        <div className="learning_resources_content_col">
                            <NavLink href="/blog" className="learning_resources_content_card">
                                <Image src={eduImg1} alt="img" />
                                <h3>Blog</h3>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LearningResources