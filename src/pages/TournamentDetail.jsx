import Navbar from "../components/Navbar";
import bgImage from "../assets/img/bg.jpg";
import { Link } from "react-router-dom";
import DetailArea from "../components/DetailArea";
import Footer from "../components/Footer";
function TournamentDetail() {
  return (
    <>
      <Navbar />
      {/* --------------------- Banner section ------------ */}
      <div
        className="py-40 px-5 w-full uppercase text-white text-center "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl popin mb-8">
          Tournament Details
        </h1>
        <div className="flex items-center justify-center ">
          <Link to="/">
            <span className="uppercase text-green hover:text-orange font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] after:bg-[#45f882] hover:after:bg-[#ffbe18]">
              home
            </span>
          </Link>
          <span className="uppercase font-bold popin">Tournament Details</span>
        </div>
      </div>
      <DetailArea />
      <Footer />
    </>
  );
}
export default TournamentDetail;
