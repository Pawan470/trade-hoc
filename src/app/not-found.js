import CommonSearch from "@/components/common/Search/CommonSearch"
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import imgoops from "../assets/images/TradeReply_404_WC_T_Oops-01.svg"
import "./notFound.scss"
import Image from "next/image";

 export default function ErrorPage() {
   return (
     <>
       <Header />
       <div id="error-page" className="errorPage">
         <div className="errorPage_inner">
           <figure>
             <Image src={imgoops} alt="404" />
           </figure>
           <div className="errorPage_content">
             <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
             <CommonSearch
               placeholder="Search for what you need..."
               icon={true}
             />
           </div>
         </div>
       </div>
       <Footer />
     </>
   );
 }