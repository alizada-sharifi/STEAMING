import AboutBanner from "../components/AboutBanner";
import Navbar from "../components/Navbar";
import headImg from "../assets/img/breadcrumb_img03.png";
import TournamentArea from "../components/TournamentArea";

function Tournament() {
  return (
    <>
      <Navbar />
      <AboutBanner img={headImg} title={"Tournament"} />
      <TournamentArea />
    </>
  );
}
export default Tournament;
