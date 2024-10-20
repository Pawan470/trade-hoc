"use client"

import { Col, Container, Row } from "react-bootstrap"

import postimg1 from "../../../assets/images/postimg1.jpg"
import postimg2 from "../../../assets/images/postimg2.jpg"
import postimg3 from "../../../assets/images/postimg3.jpg"
import postimg4 from "../../../assets/images/postimg4.jpg"

import PostCard from "./PostCard"
import RecentPost from "./RecentPost"
import Slider from "react-slick";
import CustomPagination from "@/components/common/Pagination"
import { useRouter } from "next/navigation"
import "./Blog.scss" 

const Blog = () => {
    const router = useRouter()
 
    return (
        <>
            <div className='blog py-100'>
                <Container>
                    <div className="blog_cards">
                        <div className="slider-container">
                            <Slider {...settings}>
                                {postdata.map((item, index) => (
                                    <PostCard
                                        key={index}
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                        className="w-100"
                                        onClick={() => router.push(":id")}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="blog_recentPost">
                        <h1>Recent Publications</h1>
                        <div className="blog_pagination justify-content-center justify-content-md-end d-flex mb-4 pb-1">
                            <CustomPagination />
                        </div>
                        <Row>
                            {recentpostdata.map((item, index) => (
                                <Col xs={12} key={index} className="d-flex">
                                    <RecentPost
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                        coinname={item.coinname}
                                        onClick={() => router.push(":id")}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <div className="blog_pagination justify-content-center justify-content-md-end d-flex mt-0">
                            <CustomPagination />
                        </div>
                        {/* <div className="blog_loadbtn pt-4 text-center">
                            <CommonButton title="Load More" className="" />
                        </div> */}
                    </div>
                </Container>
            </div>
        </>
    )
}


const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows: true
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows: true
            }
        },
    ]
};
const postdata = [
    {
        img: postimg1,
        title: "Profit",
        text: "Our Next Campfire Chat: Season 5",
    },
    {
        img: postimg2,
        title: "Technical Analysis",
        text: "Announcing Perls In Paradise. HearthStone’s Next Expansion",
    },
    {
        img: postimg3,
        title: "Trade Strategy",
        text: "29.6 Patch Notes",
    },
]

const recentpostdata = [
    {
        img: postimg4,
        coinname: "Bitcoin",
        title: "How the Bitcoin Having Affected Big Banking",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices dictum nulla, at luctus nisl molestie vel. Maecenas in vulputate metus. Quisque nec ipsum venenatis, blandit libero at, dignissim tortor. Praesent vitae risus orci. In condimentum euismod",
    },
    {
        img: postimg2,
        coinname: "Bitcoin",
        title: "How the Bitcoin Having Affected Big Banking",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices dictum nulla, at luctus nisl molestie vel. Maecenas in vulputate metus. Quisque nec ipsum venenatis, blandit libero at, dignissim tortor. Praesent vitae risus orci. In condimentum euismod",
    },
];

export default Blog