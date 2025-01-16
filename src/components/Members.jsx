import bgImage from "../assets/img/area_bg01.jpg";
import MemberItem from "./MemberItem";
import team01 from "../assets/img/team01.png";
import team02 from "../assets/img/team02.png";
import team03 from "../assets/img/team03.png";
import team04 from "../assets/img/team04.png";
const membersInfo = [
  {
    id: "1",
    img: team01,
    name: "killer master",
    jobTitle: "Blockchain Expert",
  },
  {
    id: "2",
    img: team02,
    name: "tanu mark",
    jobTitle: "Developer",
  },
  {
    id: "3",
    img: team03,
    name: "Thompson Scot",
    jobTitle: "Art Director",
  },
  {
    id: " 4",
    img: team04,
    name: "Shakh Danial",
    jobTitle: "Crypto Advisor",
  },
];
function Members() {
  return (
    <div
      className=" bg-cover bg-center"
      style={{
        "--image-url": `url(${bgImage})`,
        backgroundImage: "var(--image-url)",
      }}
    >
      <div className="max-w-[1400px] mx-auto text-center py-5 px-5">
        <h2 className="text-green-500 font-semibold text-green text-2xl tracking-[2px]">
          OUR TEAM MEMBERS
        </h2>
        <h1 className="text-white font-bold text-4xl mt-3 sm:text-5xl ">ACTIVE TEAM MEMBERS</h1>
        <div className="flex flex-wrap mt-14 items-center mx-[-15px] justify-center ">
          {membersInfo.map((memeber) => (
            <MemberItem {...memeber} key={membersInfo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Members;
