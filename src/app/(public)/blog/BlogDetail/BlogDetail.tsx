import { Container } from "react-bootstrap"
import "./BlogDetail.scss"
import postimg from "../../../../assets/images/singlepostimg.jpg"
import RecentPost from "../RecentPost"
import postimg4 from "../../../../assets/images/postimg4.jpg"
import CustomBreadcrumb from "../../../common/UI/Breadcrumb/CustomBreadcrumb"
import { useNavigate } from "react-router-dom"

const BlogDetail = () => {
    const navigate = useNavigate();
    const recentpostdata = [
        {
            img: postimg4,
            coinname: "Bitcoin",
            title: "How the Bitcoin Having Affected Big Banking",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices dictum nulla, at luctus nisl molestie vel. Maecenas in vulputate metus. Quisque nec ipsum venenatis, blandit libero at, dignissim tortor. Praesent vitae risus orci. In condimentum euismod",
            time: "11 Hours Ago",
        },
    ];
    return (
        <>
            <div className="blog_detail py-100">
                <Container>
                    <div className="blog_detail_inner">
                        <div className="blog_detail_heading">
                            <button type="button" onClick={() => navigate('/category')} className="blog_detail_tag">Business Updates</button>
                            <h1>TradingView partners with EUDE Business School to strengthen financial education</h1>
                            <div className="blog_detail_breadcrumb">
                                <CustomBreadcrumb
                                    to="/blog"
                                    linkname="Business updates"
                                    pagename="TradingView partners with EUDE Business School to strengthen financial education"
                                />
                            </div>
                            <h5>June 13</h5>
                        </div>

                        <div className="blog_detail_postimg">
                            <img src={postimg} alt="" />
                        </div>

                        <div className="blog_detail_text">
                            <p>In our ongoing commitment to promote financial education worldwide, we've partnered with yet another established educational institution-EUDE Business School, one of Madrid's most prestigious postgraduate institutions.</p>
                            <p> EUDE Business School is renowned internationally for its postgraduate programs and has earned recognition in major rankings and international media. Over the past 25</p>
                        </div>

                        <div className="blog_detail_author">
                            <button type="button" onClick={() => navigate('/blog')} className="blog_detail_author_btn">Next Article</button>
                            {recentpostdata.map((item: any, index: number) => (
                                <div key={index}>
                                    <RecentPost
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                        coinname={item.coinname}
                                        time={item.time}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BlogDetail