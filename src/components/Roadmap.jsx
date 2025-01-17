import { Link } from "react-router-dom";
import roadmapBg from "../assets/img/roadmap_bg.jpg";
import roadmap from "../assets/img/roadmap.png";
import hero from "../assets/img/roadmap_img.png";
// styles =====================
const itemStyle =
  "bg-[#1b242e] drop-shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] relative ml-[45px] mr-0 mt-0 mb-5 p-[45px] rounded-lg before:content-[''] before:absolute before:left-[-39px] before:-translate-y-2/4 before:w-0 before:h-0 before:border-solid before:top-2/4 last:mb-0 before:border-t-[20px] before:border-r-0 before:border-b-[20px] before:border-l-[18px] before:border-[transparent_transparent_transparent_#45f882] active before:opacity-[0.9] sm:ml-[35px] sm:mr-0 sm:mt-0 sm:mb-5 sm:px-[25px] sm:py-[35px] sm:before:!left-[-34px] xsm:ml-[35px] xsm:mr-0 xsm:mt-0 xsm:mb-5 xsm:px-[25px] xsm:py-[35px] xsm:before:!left-[-34px]";
const heroStyle =
  "roadMap__steps-img absolute max-h-[210px] pointer-events-none transition-all duration-[0.4s] ease-[ease-out] delay-[0s] right-5 top-[30px] opacity-[0.11]";
function Roadmap() {
  return (
    <div
      style={{
        "--image-url": `url(${roadmapBg})`,
        backgroundImage: "var(--image-url)",
      }}
      className="bg-center bg-cover py-24"
    >
      <div className="contaienr  px-5 ">
        <div className="flex flex-col lg:flex-row justify-around lg:px-32 gap-x-14 w-full">
          <div className="left w-full lg:w-5/12 ">
            <h1 className="uppercase text-white text-6xl font-extrabold tracking[3px] mb-5">
              a look into roadmaps seasons
            </h1>
            <p className="max-w-[95%] tracking-[1px] text-[#adb0bc] font-medium text-xl">
              With Season 1 Ending with our play and Duis elementum sollicitudin
              is yaugue euismods Nulla ulla Player-focused updates games from
              Mobile App and Enjoy.
            </p>
            <Link>
              <button className="  px-12 text-black py-2 rounded-lg shadow-lg mt-6 transform  transition duration-300 text-lg font-bold relative">
                <span className="absolute inset-0  bg-orange -z-10 rounded-md clip-path-custom hover:bg-green  "></span>
                ROADMAP
              </button>
            </Link>
            <img src={roadmap} alt="" />
          </div>
          <div className="right w-full lg:w-7/12">
            <div className=" relative ml-[60px] before:content-[''] before:absolute before:w-1.5 before:h-full before:rounded-[5px] before:left-0 before:top-0 before:bg-gradient-to-t before:from-[#10161c] before:to-[#45f882]  lg:ml-0 sm:ml-0 xsm:ml-0">
              <div className={itemStyle}>
                <h3 className="title text-[30px] text-white uppercase tracking-wide font-extrabold leading-none mt-0 mb-[22px] mx-0 lg:text-[26px] sm:text-2xl xsm:text-2xl">
                  <img src={hero} className={heroStyle} alt="hero image" />
                  season 1
                </h3>
                <ul className="text-[#adb0bc]">
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-green rounded-full hover:bg-orange"></span>
                    Battle Practice Mode
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-green rounded-full hover:bg-orange"></span>
                    Android Mobile
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-green rounded-full hover:bg-orange"></span>
                    iOS Open Beta
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-green rounded-full hover:bg-orange"></span>
                    Land Creation & Building
                  </li>
                </ul>
              </div>
              <div className={itemStyle}>
                <h3 className="title text-[30px] text-white uppercase tracking-wide font-extrabold leading-none mt-0 mb-[22px] mx-0 lg:text-[26px] sm:text-2xl xsm:text-2xl">
                  <img src={hero} className={heroStyle} alt="hero image" />
                  season 2
                </h3>
                <ul className="text-[#adb0bc]">
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-green rounded-full hover:bg-orange"></span>
                    Land Creation & Building
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-green rounded-full hover:bg-orange"></span>
                    Android Mobile
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-black border border-[#5d5f65] rounded-full"></span>
                    iOS Open Beta
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-black border border-[#5d5f65] rounded-full"></span>
                    Land Creation & Building
                  </li>
                </ul>
              </div>
              <div className={itemStyle}>
                <h3 className="title text-[30px] text-white uppercase tracking-wide font-extrabold leading-none mt-0 mb-[22px] mx-0 lg:text-[26px] sm:text-2xl xsm:text-2xl">
                  <img src={hero} className={heroStyle} alt="hero image" />
                  season 3
                </h3>
                <ul className="text-[#adb0bc]">
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-black border border-[#5d5f65] rounded-full"></span>
                    Switch to 3D gameplay
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-black border border-[#5d5f65] rounded-full"></span>
                    Android Mobile
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-black border border-[#5d5f65] rounded-full"></span>
                    iOS Open Beta
                  </li>
                  <li className=" py-1 text-base popin flex items-center gap-x-2">
                    <span className=" h-5 w-5 bg-black border border-[#5d5f65] rounded-full"></span>
                    Land Creation & Building
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Roadmap;
