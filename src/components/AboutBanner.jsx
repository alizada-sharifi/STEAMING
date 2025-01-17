import { Link } from "react-router-dom";
import bgImage from "../assets/img/bg.jpg";
import { motion } from "framer-motion";

function AboutBanner({ img, title }) {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-[1400px] mx-auto px-5 flex items-center justify-around py-20 md:py-10 relative ">
        <div className="text-white ">
          <h2 className="font-extrabold text-4xl uppercase md:text-5xl tracking-[2px] mb-3 popin">
            {title}
          </h2>
          <div className="flex items-center ">
            <Link to="/">
              <span className="uppercase text-green hover:text-orange font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] after:bg-[#45f882] hover:after:bg-[#ffbe18]">
                home
              </span>
            </Link>
            <span className="uppercase font-bold popin">{title}</span>
          </div>
        </div>
        <div className="img hidden md:block relative z-10">
          <motion.img
            src={img}
            alt="Banner Image"
            whileHover={{
              x: [0, 10, -10, 10, -10, 0],
              transition: {
                duration: 0.5,
                times: [0, 0.25, 0.5, 0.75, 1],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
