"use client";

import withAuth from "@/hoc/withAuth";
import BannerSec from "@/components/pages/Home/BannerSec/BannerSec";
import AnswerTrades from "@/components/pages/Home/AnswerTrades/AnswerTrades";
import TradesTabs from "@/components/pages/Home/AnswerTrades/TradesTabs/TradesTabs";
import OurMission from "@/components/pages/Home/OurMission/OurMission";
import Testimonials from "@/components/pages/Home/Testimonials/Testimonials";
import HowitWorks from "@/components/pages/Home/HowitWorks/HowitWorks";
import LearningResources from "@/components/pages/Home/LearningResources/LearningResources";
import FeaturedResources from "@/components/pages/Home/FeaturedResources/FeaturedResources";
import "./page.scss";

export const Home = () => {
  return (
    <div className="home" id="home-page">
      <BannerSec />
      <AnswerTrades />
      <TradesTabs />
      <section className="our_testimonial_sec">
        <OurMission />
        <Testimonials />
      </section>
      <HowitWorks />
      <LearningResources />
      <FeaturedResources />
    </div>
  );
};

export default withAuth(Home);
