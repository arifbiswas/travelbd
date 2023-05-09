import PartnersImages from "./PartnersImages";

const OurPartners = () => {
  return (
    <section className="our_partners  py-32">
      <div className="our_partners_container w-8/12 m-auto">
        <div className="our_partners_title text-center mb-16">
          <h1 className="text-[36px] font-bold text-[#313041]">
            Our Valuable Partners
          </h1>
        </div>

        <div className="our_partners_images-top mb-10">
          <PartnersImages />
        </div>

        <div className="our_partners_images-middle mb-10">
          <PartnersImages />
        </div>

        <div className="our_partners_images-bottom">
          <PartnersImages />
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
