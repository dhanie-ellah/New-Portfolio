import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideBar = () => {
  return (
    <div className=" flex flex-col gap-[10px] items-center fixed left-[5vw] top-0 sm:hidden">
      <span className="w-[2px] h-[30vh] bg-[#a7b0bd] lg:h-[20vh]"></span>
      <a href="https://github.com/dhanie-ellah" target="blank">
        <FontAwesomeIcon icon={faGithub} className="socialIcons" />
      </a>
      <a href="https://twitter.com/dhanie_ellah" target="blank">
        <FontAwesomeIcon icon={faTwitter} className="socialIcons" />
      </a>
      <a href="https://linkedin.com/in/braide-daniella-biobele" target="blank">
        <FontAwesomeIcon icon={faLinkedin} className="socialIcons" />
      </a>
      <a href="mailto:dannygodwin2003@gmail.com" target="blank">
        <FontAwesomeIcon icon={faEnvelope} className="socialIcons" />
      </a>
    </div>
  );
};

export default SideBar;
