import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Contact = () => {
  const links = [
    {
      icon: faFacebook,
      link: "https://www.facebook.com/",
    },
    {
      icon: faGithub,
      link: "https://github.com/AAKASHEE",
    },
    {
      icon: faXTwitter,
      link: "https://x.com/AAKASHEXX",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/aakashe/",
    },
    {
      icon: faYoutube,
      link: "https://www.youtube.com/@AAKASHE",
    },
  ];
  return (
    <div
      id="contact"
      className="text-white w-fll lg:w-2/3 mx-auto px-[5%] lg:px-[8%]"
    >
      <div className="flex content-center justify-center px-[8%] my-10">
        <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
        <h4 className="text-blue-500 text-3xl mainFont lg:text-5xl">Contact</h4>
      </div>
      <h1 className="text-4xl font-semibold text-center mainFont">
        Get in Touch
      </h1>
      <p className="text-center mt-5 secondFont">
        I am open for freelance projects, my inbox is always open. Whether you
        have a question, a project for me or just want to say hi, I’ll try my
        best to get back to you!
      </p>

      <div className="grid place-content-center">
        <a
          href="https://wa.me/918861653961"
          className="mainFont my-10 px-4 py-3 mx-auto font-semibold text-lg rounded border border-blue-500 hover:bg-blue-500 "
        >
          Text me!
        </a>
      </div>

      <p className="text-center my-10 mainFont">Built by AAKASHE</p>
      <div className="flex justify-center content-center p-5 gap-8 w-1/2 mx-auto mb-10">
        {links.map((link, index) => (
          <a href={link.link} className="hover:-mt-2 group" key={index}>
            <FontAwesomeIcon
              icon={link.icon}
              size="lg"
              className={`hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] my-auto text-white transition-all duration-300`}
              color=""
            />
          </a>
        ))}
      </div>
      <div className="flex justify-center mb-10">
  <button
    onClick={scrollToTop}
    className="border border-blue-500 p-3 rounded-full hover:bg-blue-500 transition-all duration-300"
  >
    <FontAwesomeIcon icon={faArrowUp} className="text-white w-5 h-5" />
  </button>
</div>
    </div>
  );
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default Contact;
