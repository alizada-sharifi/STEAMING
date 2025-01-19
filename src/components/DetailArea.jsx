import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import { ActiveItems } from "./TournamentArea";
import videoImg from "../assets/img/video_bg.jpg";
import { IoSearch } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";

// ================ styles
const inputStyle =
  " block w-full border rounded mt-0 mb-3 mx-0 px-[30px] py-[15px] border-solid border-[#23292f] bg-[#0f161b] placeholder:opacity-60  focus:!border-[#23292f] outline-none";
export const h4Style =
  "text-[18px] font-semibold uppercase leading-none m-0  py-[19px] ";
export const divStyle =
  "border-[#232a30] bg-[#182029] border -m-px p-5 rounded-[0_0_5px_5px] border-solid";
import heroImg from "../assets/img/gallery04.jpg";
function DetailArea() {
  return (
    <div className="bg-[#0f161b] py-24 px-5">
      <div className="container max-w-[1400px] flex-col lg:flex-row items-center lg:items-start mx-auto flex gap-10">
        <div className=" w-full lg:w-8/12 font-medium pl-10 pr-[45px] py-10 border-solid border-[#232a30] bg-[#182029] custom-clip-path lg:p-[30px_25px] md:p-[30px_25px] sm:p-[30px_25px] xsm:p-[30px_25px]">
          <div className="heading">
            <h2 className="text-white uppercase text-4xl mb-4 font-bold tracking-wide">
              zombie land TOURNAMENT max
            </h2>
            <div className="details border-b flex gap-x-10 text-sm border-[#323c46] pb-8 mb-8 text-[#adb0bc]">
              <span className="hover:text-green cursor-pointer tracking-[1px]">
                BY <Link>ADMIN</Link>
              </span>
              <span className="hover:text-green cursor-pointer tracking-[1px]">
                AUG 16 2023
              </span>
              <span className="hover:text-green cursor-pointer tracking-[1px]">
                NO COMMENTS
              </span>
            </div>
          </div>
          <div className="content text-[#adb0bc]">
            <p className="font-medium text-lg tracking-[0.5px] text-justify leading-7">
              Excepteur sint occaecat atat non proident, sunt in culpa qui
              officia deserunt mollit anim id est labor umLor em ipsum dolor
              amet consteur adiscing Duis elentum solliciin is yaugue euismods
              Nulla ullaorper. Ipsum is simply dummy text of printing and
              typeetting industry. Lorem Ipsum has been the industry's
              standsaard sipiscing Duis elementum solliciin. Duis aute irure
              dolor in repderit in voluptate velit esse cillum dolorliq commodo
              consequat.
            </p>
            <div className="quote my-6 flex">
              <LuQuote className="text-green text-2xl" />
              <p className=" md:text-2xl text-white leading-normal  italic font-medium  xsm:text-lg">
                Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum
                is simply dummy text of printing and typeetting industry.
              </p>
            </div>
            <p className="font-medium text-lg mb-7 tracking-[0.5px] text-justify leading-7">
              Axcepteur sint occaecat atat non proident, sunt in culpa qui
              officia deserunt mollit anim id est labor umLor em ipsum dolor
              amet, consteur adiscing Duis elentum solliciin is yaugue euismods
              Nulla ullaorper. Ipsum is simply dummy text of printing and
              typeetting industry. Lorem Ipsum has been the industry's
              standsaard sipiscing Duis elementum.
            </p>
            <div className="video relative">
              <img src={heroImg} alt="" />
              <Link className=" absolute -translate-x-2/4 -translate-y-2/4 text-[68px] text-[#fff] z-[1] left-2/4 top-2/4 hover:text-[#ffbe18]">
                <FaCirclePlay />
              </Link>
            </div>
            <p className="font-medium text-lg mb-7 tracking-[0.5px] text-justify leading-7 py-4 pb-6">
              Axcepteur sint occaecat atat non proident, sunt in culpa qui
              officia deserunt mollit anim id est labor umLor em ipsum dolor
              amet, consteur adiscing Duis elentum solliciin is yaugue euismods
              Nulla ullaorper. Ipsum is simply dummy text of printing.
            </p>
            <h1 className=" md:text-2xl text-white leading-normal  uppercase font-medium  xsm:text-lg">
              join nft games android
            </h1>
            <p className="font-medium text-lg mb-7 tracking-[0.5px] text-justify leading-7 py-2 pb-6">
              Simply dummy text of printing and typeetting industry been the
              industry's
            </p>
            <form action="#" className="pb-16  border-b  border-[#323c46] ">
              <input
                type="text"
                required
                placeholder="Name*"
                className={inputStyle}
              />
              <input
                type="text"
                placeholder="Player ID*"
                className={inputStyle}
              />
              <input type="email" placeholder="Email*" className={inputStyle} />
              <input
                type="submit"
                className=" inline-block text-[#0f161b] font-bold uppercase text-[17px] tracking-[1px] rounded mt-[15px] px-10 py-3.5 border-[none] hover:text-[#0f161b] font-Barlow bg-green  hover:bg-orange custom-clip-path"
                value="Join Now"
              />
            </form>
          </div>
          <div className="footer flex flex-col sm:flex-row  justify-between items-center mt-5 text-[#adb0bc]">
            <div className="tags flex gap-x-3">
              <span className="text-white font-bold">TAGS:</span>
              <Link className="hover:text-green text-sm">ESPORTS,</Link>
              <Link className="hover:text-green text-sm">FANTASY,</Link>
              <Link className="hover:text-green text-sm">GAME,</Link>
            </div>
            <div className="social-media flex items-center gap-x-2">
              <span>SHARE :</span>
              <Link className="hover:text-green">
                <FaFacebookF />
              </Link>
              <Link className="hover:text-green">
                <FaTwitter />
              </Link>
              <Link className="hover:text-green">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-10/12 lg:w-4/12 text-white">
          <div className="search border-[#232a30] border mb-10 rounded-[5px]">
            <div className="flex items-center ">
              <MdArrowRight size="30px" color="#45f882" />
              <h4 className={h4Style}>SEARCH</h4>
            </div>
            <div className={divStyle}>
              <div className=" flex items-center justify-between leading-none">
                <input
                  type="text"
                  className=" block w-[95%] font-medium  border-0  bg-transparent placeholder:opacity-[0.63] text-lg placeholder:font-medium outline-none text-[#adb0bc]"
                  placeholder="Search here"
                />
                <button className=" text-[#adb0bc] text-lg  hover:text-[#45f882]">
                  <IoSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="Trending border-[#232a30] border mb-10 rounded-[5px]">
            <div className="flex items-center ">
              <MdArrowRight size="30px" color="#45f882" />
              <h4 className={h4Style}>TRENDING MATCHES</h4>
            </div>
            <div className={`${divStyle} pb-0`}>
              {ActiveItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between pb-5 items-center"
                >
                  <div className="item flex items-center gap-x-4">
                    <div className="w-[70px] p-3 rounded-md bg-black">
                      <Link>
                        <img src={item.photo} className="max-w-full" alt="" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        className={`${h4Style} !px-0 !py-0 hover:text-orange`}
                      >
                        {item.title}
                      </Link>
                      <span className="font-bold text-green block mt-1">
                        $ {item.prize}
                      </span>
                    </div>
                  </div>
                  <FaCirclePlay color="#adb0bc" />
                </div>
              ))}
            </div>
          </div>
          <div className="img border-[#232a30] border mb-10 rounded-[5px]">
            <div className="flex items-center ">
              <MdArrowRight size="30px" color="#45f882" />
              <h4 className={h4Style}>ADVERTISEMENT</h4>
            </div>
            <div className={divStyle}>
              <Link>
                <img src={videoImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailArea;
