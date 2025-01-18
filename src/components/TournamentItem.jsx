import { ImTrophy } from "react-icons/im";
import { BsLightningFill } from "react-icons/bs";
import user1 from "../assets/img/tournament01.jpg";
import user2 from "../assets/img/tournament02.jpg";
import user3 from "../assets/img/tournament03.jpg";
function TournamentItem({ prizePrice, title, prizeNo, color }) {
  return (
    <div
      className={`w-4/12 text-${color} basis-4/12 xl:w-4/12 xl:basis-4/12 lg:w-5/12 lg:basis-5/12 md:w-6/12 md:basis-6/12 sm:w-9/12 sm:basis-9/12 xsm:w-full xsm:basis-full relative px-[15px]`}
    >
      <div className="relative overflow-hidden transition-[0.4s]  duration-500  z-[1] mt-0 mb-[30px] mx-0 pt-[25px] pb-[50px] px-[30px] rounded-[0_0_17px_17px] hover:translate-y-[-7px] before:content-[''] before:absolute before:-translate-x-2/4 before:w-[90px] before:h-[90px] before:blur-[50px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:z-[-1] before:left-2/4 before:top-[20%] before:bg-[radial-gradient(circle,#45f882_0%,transparent_100%)] md:border md:pt-[25px] md:pb-10 md:px-[30px] md:rounded-[17px] md:border-solid md:border-[#212d38] md:bg-[#19222b] sm:border sm:pt-[25px] sm:pb-10 sm:px-[30px] sm:rounded-[17px] sm:border-solid sm:border-[#212d38] sm:bg-[#19222b] xsm:border xsm:pt-[25px] xsm:pb-10 xsm:px-[30px] xsm:rounded-[17px] xsm:border-solid xsm:border-[#212d38] xsm:bg-[#19222b]">
        <svg
          className={`price-bg absolute w-[166px]  h-14 text-${color} z-[-1] pointer-events-none left-0 top-0`}
          viewBox="0 0 166 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.00792892 55V11C0.00792892 11 -0.729072 0.988 12.0079 1C24.7449 1.012 160.008 0 160.008 0C160.008 0 172.491 1.863 161.008 10C148.995 18.512 115.008 48 115.008 48C115.008 48 110.021 55.238 90.0079 55C69.9949 54.762 0.00792892 55 0.00792892 55Z"
            fill="currentcolor"
          ></path>
        </svg>
        <div className=" absolute flex items-center gap-[7px] font-extrabold text-[#0f161b] text-[20px] leading-none tracking-[1px] z-[2] p-[17px] left-0 top-0 font-Barlow">
          <ImTrophy />
          <span>{prizePrice}</span>
        </div>
        <div className=" mt-0 mb-[46px] mx-0">
          <div className="coming-time text-white flex justify-end gap-[15px] leading-none text-center">
            <div className="day text-[#888] font-medium">
              <p className="mb-1 text-white">00 :</p>
              DAY
            </div>
            <div className="hour text-[#888] font-medium">
              <p className="mb-1 text-white">00 :</p>
              HOUR
            </div>
            <div className="min text-[#888] font-medium">
              <p className="mb-1 text-white">00 :</p>
              MIN
            </div>
            <div className="sec text-[#888] font-medium">
              <p className="mb-1 text-white">00 :</p>
              SEC
            </div>
          </div>
        </div>
        <div className="content text-center">
          <div className="heading font-extrabold tracking-[1px]">
            <span className="text-white text-base  mb-1 ">TOURNAMENT</span>
            <h4 className="text-3xl uppercase ">{title}</h4>
          </div>
          <div className="box bg-[#10181f] my-6 flex justify-center items-center gap-x-2 border border-[#1e2933] text-[18px] uppercase font-bold px-5 py-6 rounded-xl  ">
            <ImTrophy size="20px" color="#ffbe18" />
            <span className="text-[#888] text-2xl ">
              {prizeNo} prize Places
            </span>
          </div>
          <ul>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={user1} className="rounded-md" alt="userImg" />
                <p className="uppercase text-[#adb0bc] text-sm popin font-bold hover:text-white ">
                  black ninja
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="font-semibold text-base">$ 75000</span>
                <BsLightningFill color="#ffbe18" />
              </div>
            </li>
            <li className="flex justify-between my-5 items-center">
              <div className="flex items-center gap-x-3">
                <img src={user2} className="rounded-md" alt="userImg" />
                <p className="uppercase text-[#adb0bc] text-sm popin font-bold hover:text-white ">
                  Foxtie Max
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="font-semibold text-base">$ 65000</span>
                <BsLightningFill color="#ffbe18" />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={user3} className="rounded-md" alt="userImg" />
                <p className="uppercase text-[#adb0bc] text-sm popin font-bold hover:text-white ">
                  Holam Doxe
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="font-semibold text-base">$ 55000</span>
                <BsLightningFill color="#ffbe18" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TournamentItem;
