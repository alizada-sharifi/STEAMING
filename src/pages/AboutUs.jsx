import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import Members from "../components/Members";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

function About() {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <Services />
      <Members />
      <Footer />
    </>
  );
}
export default About;
