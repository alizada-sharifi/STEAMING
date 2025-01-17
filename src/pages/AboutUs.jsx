import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import Members from "../components/Members";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import headImg from "../assets/img/banner_bg.png";
function About() {
  return (
    <>
      <Navbar />
      <AboutBanner img={headImg} title={"ABOUT US"} />
      <Services />
      <Members />
      <Footer />
    </>
  );
}
export default About;
