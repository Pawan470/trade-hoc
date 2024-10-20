import Image from "next/image"
import "./Blog.scss"



const RecentPost  = ({ img, title, text, coinname, className, time, onClick }) => {
    return (
        <>
            <div onClick={onClick} className={`recent_post ${className}`}>
                <div className="recent_post_img">
                    <Image src={img} alt="img" />
                </div>
                <div className="recent_post_content">
                    <small>{coinname}</small>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    {time && <span className="recent_post_time">{time}</span>}
                </div>
            </div>
        </>
    )
}

export default RecentPost