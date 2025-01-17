import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { IoSearch } from "react-icons/io5";
import { RiSwordLine } from "react-icons/ri";
import { FaMinus, FaPlus, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa6";
// ==================styles
import { bgMenu } from "./Navbar";
const submenustyle = "rounded-sm p-1";
function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuOpen2, setIsSubmenuOpen2] = useState(false);
  const [isSubmenuOpen3, setIsSubmenuOpen3] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openSubmenu1 = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  const openSubmenu2 = () => {
    setIsSubmenuOpen2(!isSubmenuOpen2);
  };
  const openSubmenu3 = () => {
    setIsSubmenuOpen3(!isSubmenuOpen3);
  };
  return (
    <>
      <div className={isMenuOpen ? bgMenu : ""} onClick={handleMenu}></div>
      <div className="border border-green p-1 my-4" onClick={handleMenu}>
        <FaBars size="25px" color="#45f882" />
      </div>
      {/* offcanvas section */}
      <div
        className={`${
          isMenuOpen
            ? "fixed right-0 top-0 w-72 translate-x-0 h-full  bg-[#0d141b] z-[1020] transition-all duration-[600ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col"
            : "fixed right-[-485px] top-0 w-[485px] h-full bg-[#0d141b] z-[1020] transition-all duration-[600ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col"
        }`}
      >
        <div className="offcanvas-body flex flex-col flex-1 ">
          <div className="header flex items-center justify-between py-[20px]  px-10 border-b-[#18202a] border-b">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" className="max-w-[150px]" />
              </Link>
            </div>
            <div className="close-btn " onClick={handleMenu}>
              <RiSwordLine color="#45f882" size="20px" />
            </div>
          </div>
          <div className="offcanvas-content pt-[25px] pb-[50px] px-5 text-white  ">
            <div className="mt-0 mb-5 mx-0">
              <form action="#" className="relative mb-5 ">
                <input
                  type="email"
                  placeholder="Search here..."
                  className=" block w-full text-[14px] h-[45px] text-[#fff] pl-5 pr-[45px] py-2.5 border-none bg-[#182029] placeholder:text-[14px] placeholder:text-[#c7c7c7]"
                />
                <button
                  type="submit"
                  className=" absolute w-[60px] text-[22px] border-[none]  -right-6 inset-y-0
                               ] "
                >
                  <IoSearch />
                </button>
              </form>
            </div>
            <ul>
              <li className=" border-y border-[#202b36] py-3">
                <span className="font-semibold text-[14px]">
                  <Link to="/">HOME</Link>
                </span>
              </li>
              <li className=" border-y border-[#202b36] py-3">
                <span className="font-semibold text-[14px]">
                  <Link to="/about-us">ABOUT US</Link>
                </span>
              </li>
              <div className="group relative">
                <li className="flex justify-between items-center border-y border-[#202b36] py-3">
                  <span className="font-semibold text-[14px]">
                    <Link to="/tournament">TOURNAMENT</Link>
                  </span>
                  <div
                    className={
                      isSubmenuOpen
                        ? `${submenustyle} bg-green `
                        : `${submenustyle} bg-[#182029] `
                    }
                    onClick={openSubmenu1}
                  >
                    {isSubmenuOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </li>
                <ul
                  className={`bg-[#182029]   w-full transition-all duration-500 ${
                    isSubmenuOpen
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 -translate-y-10 pointer-events-none absolute"
                  }`}
                >
                  <li className="border-y border-[#202b36] py-3">TOURNAMENT</li>
                  <li className="border-y border-[#202b36] py-3">
                    TOURNAMENT SINGLE
                  </li>
                </ul>
              </div>
              <div className="group relative">
                <li className="flex justify-between items-center border-y border-[#202b36] py-3">
                  <span className="font-semibold text-[14px]">PAGES</span>
                  <div
                    className={
                      isSubmenuOpen2
                        ? `${submenustyle} bg-green `
                        : `${submenustyle} bg-[#182029] `
                    }
                    onClick={openSubmenu2}
                  >
                    {isSubmenuOpen2 ? <FaMinus /> : <FaPlus />}
                  </div>
                </li>
                <ul
                  className={`bg-[#182029]   w-full transition-all duration-500 ${
                    isSubmenuOpen2
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 -translate-y-10 pointer-events-none absolute"
                  }`}
                >
                  <li className="border-y border-[#202b36] py-3">
                    GAMING SHOP
                  </li>
                  <li className="border-y border-[#202b36] py-3">
                    SHOP DETAILS
                  </li>
                  <li className="border-y border-[#202b36] py-3">
                    OUR SERVICES
                  </li>
                  <li className="border-y border-[#202b36] py-3">
                    SERVICES DETAILS
                  </li>
                  <li className="border-y border-[#202b36] py-3">
                    PLAYERS DETAILS
                  </li>
                </ul>
              </div>
              <div className="group relative">
                <li className="flex justify-between items-center border-y border-[#202b36] py-3">
                  <span className="font-semibold text-[14px]">NEWS</span>
                  <div
                    className={
                      isSubmenuOpen3
                        ? `${submenustyle} bg-green `
                        : `${submenustyle} bg-[#182029] `
                    }
                    onClick={openSubmenu3}
                  >
                    {isSubmenuOpen3 ? <FaMinus /> : <FaPlus />}
                  </div>
                </li>
                <ul
                  className={`bg-[#182029]   w-full transition-all duration-500 ${
                    isSubmenuOpen3
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 -translate-y-10 pointer-events-none absolute"
                  }`}
                >
                  <li className="border-y border-[#202b36] py-3">OUR BLOG</li>
                  <li className="border-y border-[#202b36] py-3">
                    BLOG DETAILS
                  </li>
                </ul>
              </div>
              <li className=" border-y border-[#202b36] py-3">
                <span className="font-semibold text-[14px]">CONTACT US</span>
              </li>
            </ul>
            <ul className="social-media  flex items-center flex-wrap gap-[10px_28px] mt-[30px]   ">
              <li className="border-[#202b36] border p-2">
                <Link target="_blank">
                  <FaTwitter />
                </Link>
              </li>

              <li className="border-[#202b36] border p-2">
                <Link target="_blank">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="border-[#202b36] border p-2">
                <Link target="_blank">
                  <FaYoutube />
                </Link>
              </li>
              <li className="border-[#202b36] border p-2">
                <Link target="_blank">
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileNav;
