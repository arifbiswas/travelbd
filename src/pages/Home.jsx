// import React from 'react';
import BannerSection from "../components/BannerSection/BannerSection";
import GetToKnowUsSection from "../components/GetToKnowUsSection/GetToKnowUsSection";
import Navbar from "../components/Navbar/Navbar";
import PriceGuaranteeSection from "../components/PriceGuaranteeSection/PriceGuaranteeSection";
import Footer from "../components/Footer/Footer";
import FooterEnd from "../components/Footer/FooterEnd";
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
        <Footer />
      </section>
      <section>
        <FooterEnd />
      </section>
    </>
  );
};

export default Home;
