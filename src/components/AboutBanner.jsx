import { Link } from "react-router-dom";
import bgImage from "../assets/img/bg.jpg";
import headImg from "../assets/img/banner_bg.png";
function AboutBanner() {
  return (
    <div
      className=""
      style={{
        "--image-url": `url(${bgImage})`,
        backgroundImage: "var(--image-url)",
      }}
    >
      <div className="container max-w-[1400px] mx-auto px-5 flex items-center justify-around py-20 md:py-10 ">
        <div className="text-white text-center">
          <h2 className="font-extrabold  text-4xl md:text-5xl tracking-[2px] mb-3 popin ">
            ABOUT US
          </h2>
          <div className="flex items-center  ">
            <Link to="/">
              <span className="uppercase text-green hover:text-orange font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] after:bg-[#45f882] hover:after:bg-[#ffbe18]">
                home
              </span>
            </Link>
            <span>ABOUT US</span>
          </div>
        </div>
        <div className="img hidden md:block">
          <img src={headImg} />
        </div>
      </div>
    </div>
  );
}
export default AboutBanner;
