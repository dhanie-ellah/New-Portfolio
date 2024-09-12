import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className=" flex justify-between items-center pt-[45px]">
      <a href="/"><h1 className=" text-3xl font-bold text-[#b2cbf4] lg:text-xl">dhanie_ellah.</h1></a>
      <section className="flex gap-[2rem] text-sm lg:gap-5 sm:hidden">
        <a href="#about">#About</a>
        <a href="#project">#Project</a>
        <a href="#experience">#Experience</a>
        <a href="#contact">#Contact</a>
        {/* <a href="#contact">#Contact</a> */}
      </section>

      <button className="hidden sm:block z-50">
        <FontAwesomeIcon className="text-white" icon={openNav ? faClose : faBars} onClick={() => {
            setOpenNav(!openNav);
          }} />
      </button>

      {/* mobile nav */}
      <section className={`flex-col gap-[2rem] absolute bg-black w-[75%] text-white h-screen z-20 top-[15vh] drop-shadow-m ${openNav ? "flex" : "hidden"}`}>
        <a href="#about" onClick={() => {setOpenNav(false)}}>#About</a>
        <a href="#project" onClick={() => {setOpenNav(false)}}>#Project</a>
        <a href="#experience" onClick={() => {setOpenNav(false)}}>#Experience</a>
        <a href="#contact" onClick={() => {setOpenNav(false)}}>#Contact</a>
        {/* <a href="#contact">#Contact</a> */}
      </section>
    </div>
  );
};

export default Navbar;
