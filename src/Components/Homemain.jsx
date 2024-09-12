import React from "react";
import Avatar from "../Assets/Avatar.742e7f989a3249f6ad06.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import Fylo from "../Assets/fylo.png";
import Joewiz from "../Assets/joewiz.png";
import Church from "../Assets/church.png";
import Crappo from "../Assets/crappo.png";
import Yelpcamp from "../Assets/yelpcamp.png";
import Harvoxx from "../Assets/harvoxx.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Homemain = () => {
  // Array of objects for projects
  const projects = [
    {
      img: Fylo,
      name: "Fylo Dark Theme Landing Page",
      description:
        "A landing page challenge from Frontend Mentor made with simple HTML and CSS.",
      stack: "HTML, CSS, Javacript",
      liveLink: "https://dhanie-ellah.github.io/fylo-dark-theme-landing-page/",
      githubLink:
        "https://github.com/dhanie-ellah/fylo-dark-theme-landing-page",
    },
    {
      img: Harvoxx,
      name: "Harvoxx.com Clone",
      description:
        "A clone of the Harvoxx Tech Hub website which is a fast growing tech hub in Port-Harcourt, Rivers State, made with HTML, CSS, Javascript and AOS",
      stack: "HTML, CSS, Javacript",
      liveLink: "https://harvoxx-clone.netlify.app/",
      githubLink: "https://github.com/dhanie-ellah/harvoxx_clone",
    },
    {
      img: Crappo,
      name: "CRAPPO-FREE-CRYPTOCURRENCY-WEBSITE",
      description:
        "A twitter challenge by Codingossy made with HTML, CSS, Javascript and AOS.",
      stack: "HTML, CSS, Javacript",
      liveLink: "https://crappo-free-cryptocurrency-website.netlify.app/",
      githubLink:
        "https://github.com/dhanie-ellah/CRAPPO-Free-Cryptocurrency-Website",
    },
    {
      img: Yelpcamp,
      name: "Yelpcamp",
      description:
        "A multipage site for displaying mountains. It is a coding challenge gotten online.",
      stack: "HTML, CSS, Javacript",
      liveLink: "https://yelpcamp-daniella.netlify.app/",
      githubLink: "https://github.com/dhanie-ellah/YelpCamp",
    },
    {
      img: Joewiz,
      name: "Joewiz",
      description:
        "A simple portfolio website for a graphic designer to display his works for people to access it easily",
      stack: "HTML, CSS, Javacript",
      liveLink: "https://joewizgraphics.netlify.app/",
      githubLink: "https://github.com/dhanie-ellah/JoeWizGraphics",
    },
    {
      img: Church,
      name: "CHURCH SITE CLONE",
      description:
        "A replicate of a multi page church website made with HTML, CSS and Javascript",
      stack: "HTML, CSS, Javacript",
      liveLink: "https://dhanie-ellah.github.io/MIMOSAN_clone/",
      githubLink: "https://github.com/dhanie-ellah/MIMOSAN_clone",
    },
  ];
  // mapping projects
  const project = projects.map((Single) => (
    <div className=" border rounded-xl w-[30%] flex flex-col gap-2 overflow-hidden lg:w-[48%] sm:w-full ">
      <div className=" w-full overflow-hidden">
        <img src={Single.img} alt={Single.name} className=" w-full" />
      </div>
      <section className=" p-5 flex flex-col gap-2 pt-2">
        <h1 className=" text-lg font-bold uppercase">{Single.name}</h1>
        <p>{Single.description}</p>
        <p className=" text-xs">Tech stack: {Single.stack}</p>
        <div className=" flex justify-between items-center">
          <a
            href={Single.liveLink}
            className="flex gap-1 items-center hover:underline"
            target="blank"
          >
            <FontAwesomeIcon icon={faLink} className=" text-sm text-gray-500" />
            <p className=" text-xs text-gray-500">Live preview</p>
          </a>
          <a
            href={Single.githubLink}
            className="flex gap-1 items-center hover:underline"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-sm text-gray-500"
            />
            <p className=" text-xs text-gray-500">Github</p>
          </a>
        </div>
      </section>
    </div>
  ));

  return (
    <div className=" rounded-2xl py-8 bg-black flex flex-col gap-[2rem] text-sm text-white bg-opacity-50 relative overflow-hidden">
      {/* about section */}
      <div className=" flex flex-col gap-3 pt-10" id="about">
        <header>
          <h1 className=" text-3xl font-bold">1.About me</h1>
          <hr className="w-[8vw] h-[3px] bg-white border-none" />
        </header>
        <section className=" flex flex-col gap-3 items-center">
          <div className=" w-[25%] m-auto">
            <img src={Avatar} alt="Avatar" className="w-full" />
          </div>
          <div>
            <h1 className=" text-center text-4xl uppercase font-extrabold">
              I Code Websites
            </h1>
            <p className=" text-center text-gray-300">
              I am a dynamic and detail-oriented Frontend Web Developer with 3+ years of experience creating efficient and innovative web applications. Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS. Skilled in developing responsive websites for small businesses and collaborating on large-scale enterprise applications. Adept at collaborating with cross-functional teams to deliver exceptional user experiences, with a strong problem-solving ability and a keen eye for design.
            </p>
          </div>
          {/* cta buttons */}
          <div className=" flex justify-center items-center gap-3">
            <a href="#contact" className="button">
              Get in touch
            </a>
            {/* <a href={Resume} className="button" download>
              Download CV
            </a> */}
            <a href="https://drive.google.com/file/d/1XUvyP03UU9uIgjggK7BhMCVJghnuAVkx/view?usp=drive_link" className="button" target="blank">
              Resume
            </a>
          </div>
        </section>
      </div>
      {/* Project section */}
      <div className=" flex flex-col gap-3 pt-10" id="project">
        <header>
          <h1 className=" text-3xl font-bold">2.Projects</h1>
          <hr className="w-[8vw] h-[3px] bg-white border-none" />
        </header>
        <div className=" flex justify-between flex-wrap gap-5">{project}</div>
      </div>
      {/* experience section */}
      <div className=" flex flex-col gap-3 pt-10" id="experience">
        {/* header of the section */}
        <header>
          <h1 className=" text-3xl font-bold">3.Experience</h1>
          <hr className="w-[8vw] h-[3px] bg-white border-none" />
        </header>
        <div className=" flex flex-col gap-5">
          {/* harvoxx */}
          <section className=" flex flex-col gap-3">
            <header className="flex justify-between items-center">
              <p>Harvoxx Tech Hub || Intern</p>
              <p className=" text-xs font-medium text-gray-500">
                June 2022-September 2022
              </p>
            </header>
            <p className=" text-gray-500">
              I underwent four months of intensive training, got involved in the
              development of a list of mini-projects, transformed Figma
              prototypes into functional User Interfaces using the necessary
              technologies and collaborated with a team to work on a project as
              the front-end web developer.
            </p>
          </section>
          {/* zuri */}
          <section className=" flex flex-col gap-3">
            <header className="flex justify-between items-center">
              <p>Zuri & I4G || Intern</p>
              <p className=" text-xs font-medium text-gray-500">
                September 2022-December 2022
              </p>
            </header>
            <p className=" text-gray-500">
              I underwent intensive training for 3 months on Frontend web
              development and collaborated and worked on a project as a
              front-end web developer on the team.
            </p>
          </section>
        </div>
      </div>
      {/* contact section */}
      <div className=" flex flex-col gap-3 pt-10" id="contact">
        <header>
          <h1 className=" text-3xl font-bold">4.Get in touch</h1>
          <hr className="w-[8vw] h-[3px] bg-white border-none" />
        </header>
        <div className=" flex gap-5 md:flex-col">
          <p className=" text-gray-500 w-[75%] md:w-full">I am actively seeking new opportunities and my inbox is always open and I’m interested in freelance opportunities. Whether you have a question or simply want to say Hello , I will respond!</p>
          <button className=" bg-gray-800 rounded-lg px-5 py-2 text-white"><a href="mailto:dannygodwin2003@gmail.com">Say Hi</a></button>
        </div>
      </div>

      <hr className=" outline-none border-none bg-gray-500 h-[1px]" />

      <div className=" flex items-center justify-between">
        <p className=" text-center md:text-xs">Coded by <b>dhanie_ellah</b> | © Copyright 2024</p>
        <div className=" text-gray-500 flex gap-3 md:text-xs">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default Homemain;
