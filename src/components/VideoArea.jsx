import VideoAreaBg from "../assets/img/video_bg.jpg";
import { Link } from "react-router-dom";
function VideoArea() {
  return (
    <>
      <div
        className=" pt-[200px]  pb-[150px] bg-fixed  bg-center text-white bg-cover text-center xsm:py-[200px]"
        style={{
          "--image-url": `url(${VideoAreaBg})`,
          backgroundImage: "var(--image-url)",
        }}
      >
        <h1 className=" xsm:text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-[3px] mb-4 ">
          JOIN THE <span className="text-green">COMMUNITY</span>
        </h1>
        <p className="text-xl tracking-wide">
          Join our Discord community and choosec onsteur join discord
        </p>
        <Link>
          <button className=" font-semibold px-12 text-black py-2 rounded-lg shadow-lg mt-6 transform  transition duration-300 text-[25px] relative">
            <span className="absolute inset-0  bg-green -z-10 rounded-md clip-path-custom hover:bg-white  "></span>
            JION DISCORD
          </button>
        </Link>
      </div>
    </>
  );
}
export default VideoArea;
