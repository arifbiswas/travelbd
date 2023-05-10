// import React from 'react';
import BannerSection from "../components/BannerSection/BannerSection";
import GetToKnowUsSection from "../components/GetToKnowUsSection/GetToKnowUsSection";
import Navbar from "../components/Navbar/Navbar";
import PriceGuaranteeSection from "../components/PriceGuaranteeSection/PriceGuaranteeSection";
import Footer from "../components/Footer/Footer";
import FooterEnd from "../components/Footer/FooterEnd";
import OurPartners from "../components/Our Partners/OurPartners";
import AppPromotion from "../components/App Promotion/AppPromotion";
import Articles from "../components/Articles/Articles";
import FindBestTour from "../components/FindBestTour/FindBestTour";
const Home = () => {
  return (
    <>
      <section className="">
        <Navbar />
      </section>
      <section className="">
        <BannerSection />
      </section>
      <section className="">
        <PriceGuaranteeSection />
      </section>
      <section className="">
        <GetToKnowUsSection />
      </section>
      <section>
        <FindBestTour />
      </section>
      <section>
        <Articles />
      </section>
      <section>
        <AppPromotion />
      </section>
      <section>
        <OurPartners />
      </section>
      <section>
        <Footer />
      </section>
      <section>
        <FooterEnd />
      </section>
    </>
  );
};

export default Home;
