const Articles = () => {
  return (
    <section className="articles_main">
      <div className="articles_container w-8/12 m-auto py-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="articles_leftside-content">
          <p className="text-sm text-[#47A6FF]">OUR LATEST</p>
          <h1 className="text-[36px] text-[#313041] font-semibold mb-7">
            News & Articles
          </h1>
          <p className="text-[#868686] mb-10">
            There are many latest variations of passages included every time.
            And we want to give our clients the highest satisfaction. JOLUTSHOB
            will do anything to keep you smiling. See our latest news and
            articles.
          </p>

          <button className="text-[14px] font-semibold bg-sky-400 px-5 py-3 rounded-md text-white hover:bg-slate-800">
            VIEW ALL POSTS
          </button>
        </div>

        <div className="articles_rightside-cards"></div>
      </div>
    </section>
  );
};

export default Articles;
