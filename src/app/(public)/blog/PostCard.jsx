import Image from "next/image"
import "./Blog.scss"



const PostCard  = ({ img, title, text, className, onClick }) => {
    return (
        <>
            <div onClick={onClick} className={`blog_postcard ${className}`}>
                <div className="blog_postcard_img">
                    <div className="blog_postcard_img_overlay">
                        <Image src={img} alt="img" />
                    </div>
                </div>
                <div className="blog_postcard_content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default PostCard