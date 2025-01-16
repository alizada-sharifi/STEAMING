import logo from "../assets/img/logo.png";
import { IoSend } from "react-icons/io5";
import img1 from "../assets/img/social_icon01.png";
import img2 from "../assets/img/social_icon02.png";
import img3 from "../assets/img/social_icon03.png";
import img4 from "../assets/img/social_icon04.png";
const liStyle =
  " text-[15px] py-1 cursor-pointer inline-block text-[#adb0bc] relative hover:text-[#45f882]  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-[#45f882]  hover:after:origin-[left_top] hover:after:scale-100";
const images = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
];
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
            <div className="icons flex gap-x-3">
              {images.map((img) => (
                <img
                  src={img.img}
                  alt="social icon"
                  key={img.id}
                  className="w-8"
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full md:w-4/12 lg:w-2/12 text-white">
          <h2 className="text-3xl font-bold">QUICK LINK</h2>
          <ul className="text-[#a8a5a5]">
            <li className={liStyle}>Gaming</li><br />
            <li className={liStyle}>Product</li><br />
            <li className={liStyle}>All NFTs</li><br />
            <li className={liStyle}>
              Social Network
            </li><br />
            <li className={liStyle}>
              Domain Names
            </li><br />
            <li className={liStyle}>
              Collectibles
            </li><br />
          </ul>
        </div>
        <div className=" w-full md:w-4/12 lg:w-2/12 text-white">
          <h2 className="text-3xl font-bold">SUPPORTS</h2>
          <ul className="text-[#a8a5a5]">
            <li className={liStyle}>
              Setting & Privacy
            </li><br />
            <li className={liStyle}>
              Help & Support
            </li><br />
            <li className={liStyle}>
              Live Auctions
            </li><br />
            <li className={liStyle}>
              Item Details
            </li><br />
            <li className={liStyle}>
              24/7 Supports
            </li><br />
            <li className={liStyle}>Our News</li><br />
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
