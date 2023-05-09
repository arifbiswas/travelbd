import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";

const FooterEnd = () => {
  return (
    <div>
      <section className="footer_end w-8/12 m-auto py-8 flex justify-between items-center ">
        <div className="footer_end_copyright text-[#919191]">
          <p>© 2023 All rights reserved. Jol Utshob Tours.</p>
        </div>
        <div className="footer_end_social_icons flex justify-between items-center gap-3">
          <BsFacebook size={20} />
          <BsInstagram size={20} />
          <BsPinterest size={20} />
        </div>
        <div className="footer_end_developers text-[#919191]">
          <p>
            Developed By <b>Mir</b>{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default FooterEnd;
