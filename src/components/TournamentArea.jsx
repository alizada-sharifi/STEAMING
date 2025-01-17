import TournamentItem from "./TournamentItem";
import bgImage from "../assets/img/tournament_bg.jpg";
import { Link } from "react-router-dom";
import ActiveTournamentItem from "./ActiveTournamentItem";
const items = [
  {
    id: 1,
    prizePrice: 25000,
    title: "of weekly",
    prizeNo: 3,
    color: "green",
  },
  {
    id: 2,
    prizePrice: 50000,
    title: "lucky card",
    prizeNo: 10,
    color: "orange",
  },
  {
    id: 3,
    prizePrice: 75000,
    title: "of month",
    prizeNo: 50,
    color: "green",
  },
];
function TournamentArea() {
  return (
    <>
      <div className="bg-[#10181f] py-20">
        <div className="container px-5 max-w-[1400px] mx-auto">
          <div className="heading uppercase text-center">
            <h2 className=" font-semibold text-green text-xl tracking-[1px]">
              our tournament
            </h2>
            <h1 className="text-white font-bold text-4xl mt-3 sm:text-5xl ">
              play to earn games
            </h1>
          </div>
          <div className="flex flex-wrap mx-[-15px] mt-10 justify-center md:px-10 lg:px-28 ">
            {items.map((item) => (
              <TournamentItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="py-20"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container max-w-[1400px] mx-auto px-5 md:px-10 lg:px-28 ">
          <div className="heading uppercase flex justify-between items-center ">
            <div>
              <h2 className=" font-semibold text-green text-xl tracking-[1px]">
                tournament list
              </h2>
              <h1 className=" text-[45px] text-white popin font-extrabold tracking-[1px] m-0 sm:text-[35px] xsm:text-[35px]">
                Active tournament
              </h1>
            </div>
            <div>
              <Link>
                <span className="  font-semibold text-[#adb0bc]   pb-[3px] border-b-2 border-green hover:text-[#45f882] ">
                  EXPLORE MORE
                </span>
              </Link>
            </div>
          </div>
          <ActiveTournamentItem />
        </div>
      </div>
    </>
  );
}
export default TournamentArea;
