import { ImTrophy } from "react-icons/im";
import { FaClock, FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
const divStyle =
  "relative z-[1] pl-[50px]  before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-1/3 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] ";
function ActiveTournamentItem({ photo, title, prize, time }) {
  return (
    <div className="bg-[#19222b] w-3/12 py-5 uppercase rounded-xl  lg:w-5/12 lg:basis-5/12 md:w-6/12 md:basis-6/12 sm:w-9/12 sm:basis-9/12 xsm:w-full xsm:basis-full relative px-6 border border-[#212d38]">
      <div className="flex justify-between ">
        <img src={photo} className="max-w-[89px] max-h-[91px] " />
        <div className={divStyle}>
          <h5 className="text-white text-xl font-bold">{title}</h5>
          <span className="uppercase text-green hover:text-orange font-bold text-[14px] tracking-[2px] flex items-center before:content-[''] before:block before:w-2 before:h-2 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-2.5 before:my-0 before:rounded-[50%] before:bg-[#45f882] hover:before:bg-[#ffbe18]">
            online
          </span>
        </div>
      </div>
      <div className="flex  justify-between mt-16 mb-8">
        <div>
          <p className="text-[#adb0bc] pb-3 text-xl font-medium">PRIZE</p>
          <div className="text-green flex items-center gap-x-2">
            <ImTrophy />
            <span className="hover:text-orange font-bold">${prize}</span>
          </div>
        </div>
        <div className={divStyle}>
          <p className="text-[#adb0bc] pb-3 text-xl font-medium">TIME</p>
          <div className="text-green flex items-center gap-x-3">
            <FaClock />
            <span className="hover:text-orange font-bold">{time}</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <Link className=" items-center justify-center gap-x-1 flex uppercase font-bold text-[13px] text-[#adb0bc] hover:text-white tracking-[1px]  py-3 rounded-md  bg-[#0c1217]">
          live now
          <FaCirclePlay className="hover:text-orange" />
        </Link>
      </div>
    </div>
  );
}
export default ActiveTournamentItem;
