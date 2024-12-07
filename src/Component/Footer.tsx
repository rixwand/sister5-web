import {Mail, MapPin, Phone} from "lucide-react";

const Footer = () => {
  return (
    <section id="footer" data-nav="Contact Us" className="bg-primary container min-w-full">
      <div className="text-inactive font-poppins flex flex-wrap justify-center lg:justify-start gap-x-32 py-10">
        <div className="w-full lg:w-1/3 text-center lg:text-start ">
          <h5 className="font-semibold text-2xl">
            Sister5
          </h5>
          <p className="font-poppins text-sm mt-3 lg:w-2/3">
            You minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="text-[15px] font-poppins items-center lg:items-start flex flex-col gap-y-5 lg:mt-0 mt-10">
          <h5 className={"font-semibold text-2xl -mb-3"}>Get In Touch</h5>
          <span className={"flex flex-row gap-x-4 items-center"}>
            <MapPin/>
          <p className={""}>Non deserunt ullamco <br/> ullamco est sit aliqua </p>
          </span>
          <span className={"flex flex-row gap-x-4 items-center"}>
            <Mail/>
          <p className={""}>support@sister5.com <br/> mail@sister5.com</p>
          </span>
          <span className={"flex flex-row gap-x-4 items-center"}>
            <Phone/>
          <p className={""}>(+62)823-4567-8901 <br/>(+62)823-2222-3333 </p>
          </span>

        </div>
        <div className="text-[15px] font-poppins flex flex-col lg:items-start items-center lg:mt-0 mt-10">
          <h5 className={"font-semibold text-2xl mb-3"}>Explore Categories</h5>
          <div className={"flex flex-row gap-x-20"}>
            <div className={"flex flex-col gap-y-5"}>
              <p>Data Science</p>
              <p>English</p>
              <p>Finance</p>
              <p>Writing</p>
            </div>
            <div className={"flex flex-col gap-y-5"}>
              <p>Development</p>
              <p>Art & Design</p>
              <p>Management</p>
              <p>Business</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col lg:items-start items-center lg:flex-row w-full justify-between mt-16 border-t border-inactive pt-5">
          <div className="footer__end-copyright"><p className=" mb-0">© 2024 Copyright | All Rights Reserved.</p>
          </div>
          <div>
            <ul className="flex flex-row gap-x-8 lg:text-base text-sm mt-5 lg:mt-0">
              <li className="footer__end-item"><a href="/">Terms &amp; Conditions</a></li>
              <li className="footer__end-item"><a href="/">Privacy Policy</a></li>
              <li className="footer__end-item"><a href="/"> Sitemap </a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;