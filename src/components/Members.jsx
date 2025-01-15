import bgImage from "../assets/img/area_bg01.jpg";
import MemberItem from "./MemberItem";
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
        <h2 className="text-green-500 font-semibold text-2xl tracking-[1px]">
          OUR TEAM MEMBERS
        </h2>
        <h1 className="text-white font-bold text-5xl ">ACTIVE TEAM MEMBERS</h1>
        <span className="h-1 w-16 rounded-md bg-green-500 mb-10 block mx-auto"></span>
        <div className="flex flex-wrap items-center mx-[-15px] justify-center ">
          <MemberItem />
          <MemberItem />
          <MemberItem />
          <MemberItem />
        </div>
      </div>
    </div>
  );
}
export default Members;
