const AppPromotion = () => {
  return (
    <section className="app_promo bg-[#47A6FF]">
      <div className="app_promo_conatiner flex justify-between items-center w-8/12 m-auto pt-16 relative">
        <div className="app_promo_leftside">
          <div className="app_promo_leftside_text">
            <img src="https://i.postimg.cc/FFVKgMmj/Screenshot-86.png" alt="" />
          </div>

          <div className="app_promo_leftside_content">
            <h1 className="text-4xl text-[#313041] font-semibold mb-5">
              Android App Available!
            </h1>
            <p className=" text-[#5f5f5f] font-semibold mb-8">
              Our members can get points while Join us! .
            </p>
            <img
              className="max-w-[195px] pb-10"
              src="https://i.postimg.cc/MHbF7Wg4/google-play-btn.png"
              alt=""
            />
          </div>
        </div>

        <div className="app_promo_rightside   absolute bottom-0 right-10">
          <img
            className=""
            src="https://i.postimg.cc/FR1M6CBs/image-app.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
