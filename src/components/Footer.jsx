import logo from "../assets/img/logo.png";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <div className="cotainer flex bg-[#0f161b] py-5 px-10 mx-auto">
      <div className="row max-w-[1400px] flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-x-16 gap-y-10">
        <div className=" w-full md:w-4/12 lg:w-4/12">
          <div className="logo mb-8">
            <img src={logo} className="max-w-[130px]" alt="logo" />
          </div>
          <div className="content">
            <p className="text-[#a8a5a5] mb-6 ">
              Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
              augue euismod. Nulla ullam dolor sitamet consectetur
            </p>
            <div className="mb-4">
              <h3 className="text-white tracking-[1.5px] text-lg font-medium ">
                ACTIVE <span className="text-green">WITH US</span>
              </h3>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-4/12 lg:w-2/12 text-white">
          <h2 className="text-3xl font-bold">QUICK LINK</h2>
          <ul className="text-[#a8a5a5]">
            <li className="mt-3 hover:text-green cursor-pointer">Gaming</li>
            <li className="mt-3 hover:text-green cursor-pointer">Product</li>
            <li className="mt-3 hover:text-green cursor-pointer">All NFTs</li>
            <li className="mt-3 hover:text-green cursor-pointer">
              Social Network
            </li>
            <li className="mt-3 hover:text-green cursor-pointer">
              Domain Names
            </li>
            <li className="mt-3 hover:text-green cursor-pointer">
              Collectibles
            </li>
          </ul>
        </div>
        <div className=" w-full md:w-4/12 lg:w-2/12 text-white">
          <h2 className="text-3xl font-bold">SUPPORTS</h2>
          <ul className="text-[#a8a5a5]">
            <li className="mt-3 hover:text-green cursor-pointer">
              Setting & Privacy
            </li>
            <li className="mt-3 hover:text-green cursor-pointer">
              Help & Support
            </li>
            <li className="mt-3 hover:text-green cursor-pointer">
              Live Auctions
            </li>
            <li className="mt-3 hover:text-green cursor-pointer">
              Item Details
            </li>
            <li className="mt-3 hover:text-green cursor-pointer">
              24/7 Supports
            </li>
            <li className="mt-3 hover:text-green cursor-pointer">Our News</li>
          </ul>
        </div>
        <div className=" w-full md:w-4/12 lg:w-4/12 text-white">
          <h2 className="text-3xl font-bold">NEWSLETTER</h2>
          <p className="mt-5 mb-8 text-[#a8a5a5]">
            Subscribe our newsletter to get our latest update & newsconsectetur
          </p>
          <form action="#">
            <form
              action="#"
              className="relative mb-5 bg-[#1b242e] rounded-lg overflow-hidden w-9/12  "
            >
              <input
                type="email"
                placeholder="Your email address"
                className="block w-full  text-[#a8a5a5]  text-[14px] font-medium  pl-[22px] pr-20 py-[15px]  bg-transparent    focus:!outline-offset-0  focus:outline-0"
              />
              <button
                type="submit"
                className=" absolute w-[60px] text-[22px] bg-green border-[none]  right-0 inset-y-0  before:content-[''] before:absolute before:w-px before:left-0 before:inset-y-1.5 ] "
              >
                <IoSend className=" text-black ml-5  " />
              </button>
            </form>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Footer;
