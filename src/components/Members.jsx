import bgImage from "../assets/img/area_bg01.jpg";
import MemberItem from "./MemberItem";
function Members() {
  return (
    <div
      className="container bg-cover w-full bg-center bg-[image:var(--image-url)] "
      style={{ "--image-url": `url(${bgImage})` }}
    >
      <div className=" max-w-[1400px] mx-auto text-center py-5 px-5 ">
        <h2 className="text-green font-semibold text-2xl tracking-[1px] ">
          OUR TEAM MEMBERS
        </h2>
        <h1 className="text-white font-bold text-5xl mt-2 ">
          ACTIVE TEAM MEMBERS
        </h1>
        <span className="h-1 w-16 rounded-md !bg-green mb-10 "></span>
        <div className="flex flex-wrap justify-center gap-10 mt-12">
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
