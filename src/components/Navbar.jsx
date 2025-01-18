import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { IoSearch, IoSend } from "react-icons/io5";
import { RiSwordLine } from "react-icons/ri";

import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa6";
import MobileNav from "./MobileNav";

// ==============styles
const menuItemStyle = "menu-item-has-children  block relative list-none group";
export const bgMenu =
  "absolute top-0 left-0 right-0 h-screen z-10 bg-[#111922]  bg-opacity-60 backdrop-blur-sm";
const liStyle =
  " text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc]   ";
function Navbar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const handleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  return (
    <>
      <nav className="flex items-center flex-grow justify-between px-[50px]   sticky w-full shadow-lg top-0 z-[1000] bg-[#121a23] ">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="max-w-[177px]" />
          </Link>
        </div>

        <div className="menu text-white hidden lg:block ">
          <ul className="flex font-bold text-[20px] py-[38px]">
            <li className="px-[23px] hover:text-green">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="px-[23px] hover:text-green ">
              <NavLink to="/about-us">ABOUT US</NavLink>
            </li>
            <li className={menuItemStyle}>
              <Link className=" text-[20px] font-bold  text-[#fff] block relative tracking-[0.8px] z-[1] px-[23px]   before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-green group-hover:text-green  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]">
                TOURNAMENT
              </Link>
              <ul
                className="sub-menu absolute min-w-[230px] top-[50px]  origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px]  border-solid scale-x-100 scale-y-0 left-0  bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100 rounded-md  border-t-8 border-green            
 "
              >
                <li className=" text-left block ml-0 group/second">
                  <Link
                    to="/tournament"
                    className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]"
                  >
                    TOURNAMENT
                  </Link>
                </li>
                <li className="active text-left block ml-0 group/second">
                  <Link
                    to="/tournament-details"
                    className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]"
                  >
                    TOURNAMENT DETAILS
                  </Link>
                </li>
              </ul>
            </li>
            <li className={menuItemStyle}>
              <Link className=" text-[20px] font-bold  text-[#fff] block relative tracking-[0.8px] z-[1] px-[23px]   before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-green group-hover:text-green  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]">
                PAGES
              </Link>
              <ul
                className="sub-menu absolute min-w-[230px] top-[50px]  origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px]  border-solid scale-x-100 scale-y-0 left-0  bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100 rounded-md  border-t-8 border-green            
 "
              >
                <li className=" text-left block ml-0 group/second">
                  <Link
                    to="/shop"
                    className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]"
                  >
                    GAMING SHOP
                  </Link>
                </li>
                <li className="active text-left block ml-0 group/second">
                  <Link className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]">
                    SHOP DETAILS
                  </Link>
                </li>
                <li className="active text-left block ml-0 group/second">
                  <Link className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]">
                    OUR SERVICES
                  </Link>
                </li>
                <li className="active text-left block ml-0 group/second">
                  <Link className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]">
                    SERVICES DETAILS
                  </Link>
                </li>
                <li className="active text-left block ml-0 group/second">
                  <Link className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]">
                    PLAYERS DETAILS
                  </Link>
                </li>
              </ul>
              <div className="dropdown-btn">
                <span className="plus-line"></span>
              </div>
            </li>
            <li className={menuItemStyle}>
              <Link className=" text-[20px] font-bold  text-[#fff] block relative tracking-[0.8px] z-[1] px-[23px]   before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-green group-hover:text-green  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]">
                NEWS
              </Link>
              <ul
                className="sub-menu absolute min-w-[230px] top-[50px]  origin-[0_0] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.15)] block invisible opacity-0 z-[9] m-0 px-0 py-[18px]  border-solid scale-x-100 scale-y-0 left-0  bg-[#182029] group-hover:opacity-100 group-hover:visible group-hover:scale-100 rounded-md  border-t-8 border-green            
 "
              >
                <li className=" text-left block ml-0 group/second">
                  <Link className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]">
                    OUR BLOG
                  </Link>
                </li>
                <li className="active text-left block ml-0 group/second">
                  <Link className="font-Barlow text-[15px] leading-[1.4] font-bold text-[#fff] uppercase tracking-[0.8px] relative flex pl-[25px] pr-[15px] py-[9px] before:content-[''] before:block before:h-[7px] before:bg-[#45f882] before:transition-[width] before:duration-[0.2s] before:ease-linear before:ml-0 before:mr-[9px] before:mt-[7px] before:mb-0 before:rounded-[0_5px_0_0] before:w-0 group-hover/second:before:w-[7px]">
                    BLOG DETAILS
                  </Link>
                </li>
              </ul>
              <div className="dropdown-btn">
                <span className="plus-line"></span>
              </div>
            </li>

            <li className="px-[23px] hover:text-green">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <div className="serach-bar">
          <ul className="flex items-center gap-x-4">
            <li className="hidden md:block ">
              <IoSearch color="#fff" size="20px" />
            </li>
            <div onClick={handleOffcanvas} className="hidden md:block  ">
              <li className="side-toggle-icon group relative ml-[25px] flex flex-col  min-w-[45px] gap-2.5 cursor-pointer ">
                <span className=" block h-[3px] bg-white  transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px]  group-hover:w-[45px]"></span>
                <span className=" block h-[3px] bg-white hover:!bg-green transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[45px]  group-hover:w-[45px]"></span>
                <span className=" block h-[3px] bg-white  transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px] self-end  group-hover:w-[45px]"></span>
              </li>
            </div>
            <div className="block lg:hidden  ">
              <MobileNav />
            </div>
          </ul>
        </div>
      </nav>
      {/* offcanvas section ========================= */}
      <div
        className={isOffcanvasOpen ? bgMenu : "hidden"}
        onClick={handleOffcanvas}
      ></div>
      <div
        className={`${
          isOffcanvasOpen
            ? "fixed right-0 top-0 w-[485px] translate-x-0 h-full block bg-[#0d141b] z-[1020] transition-all duration-[600ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col"
            : "fixed right-[-485px] top-0 w-[485px] h-full bg-[#0d141b] z-[1020] transition-all duration-[600ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col"
        }`}
      >
        <div className="offcanvas-body flex flex-col flex-1">
          <div className="header flex items-center pt-[35px] pb-[25px]  px-10 border-b-[#18202a] border-b">
            <div className="logo">
              <Link>
                <img src={logo} alt="logo" className="max-w-[177px]" />
              </Link>
            </div>
            <div
              className="close-btn  w-[50px] h-[50px] flex items-center justify-center text-[20px] text-[#adb0bc] cursor-pointer transition-all duration-[0.3s] ease-[ease-out] delay-[0s] ml-auto rounded-[50%] hover:text-[#0f161b] hover:bg-[#45f882] "
              onClick={handleOffcanvas}
            >
              <RiSwordLine />
            </div>
          </div>
          <div className="offcanvas-content pt-[25px] pb-[50px] px-10 text-white  ">
            <h2 className="text-3xl tracking-[1px] mt-0 mb-[50px] mx-0 uppercase  font-bold  ">
              Best Seller of Month Ideas for{" "}
              <span className="text-green">NFT Wallet</span>
            </h2>
            <div className="mt-0 mb-10 mx-0">
              <h4 className="text-[16px] tracking-[0.5px] font-semibold mt-0 mb-[22px] mx-0  ">
                {" "}
                CONTACT US
              </h4>
              <ul>
                <li className={liStyle}>
                  <span className="hover:text-green">+93731048907</span>
                </li>
                <li className={liStyle}>
                  <span className="hover:text-green">
                    alizadasharifi2005@gmail.com
                  </span>
                </li>
                <li className={liStyle}>
                  <span className="hover:text-green">Herat,Afghanistan</span>
                </li>
              </ul>
            </div>
            <div className="message">
              <h4 className=" text-[16px] tracking-[0.5px] font-semibold text-green  mb-[22px] uppercase">
                Subscribe
              </h4>
              <form action="#" className="relative mb-5 ">
                <input
                  type="email"
                  placeholder="Get News & Updates"
                  className="block w-full border  text-[14px] font-medium transition-all duration-[0.3s] ease-[ease-out] delay-[0s] pl-[22px] pr-20 py-[15px] border-solid border-[#202b36] font-Barlow bg-transparent  focus:!ring-[none] focus:!border-[#535d68] focus:border-solid focus:!outline-offset-0  focus:outline-0"
                />
                <button
                  type="submit"
                  className=" absolute w-[60px] text-[22px] border-[none]  right-0 inset-y-0
                            bg-transparent before:content-[''] before:absolute before:w-px before:left-0 before:inset-y-1.5 ] "
                >
                  <IoSend className=" text-green hover:text-[#ffbe18] " />
                </button>
              </form>
              <p>
                Subscribe dolor sitamet, consectetur adiping eli. Duis esollici
                tudin augue.
              </p>
            </div>
            <ul className="social-media  flex items-center flex-wrap gap-[10px_28px] mt-[50px]  pt-[30px]  border-t-[#202b36] border-t border-solid">
              <li>
                <Link target="_blank">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link target="_blank">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link target="_blank">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link target="_blank">
                  <FaYoutube />
                </Link>
              </li>
              <li>
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
export default Navbar;
