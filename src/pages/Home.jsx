import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import NtfItem from "../components/NftItem";
import AboutUs from "../components/AboutUs";
import Members from "../components/Members";
import VideoArea from "../components/VideoArea";
import Roadmap from "../components/Roadmap";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
const items = [
  {
    id: 1,
    photo:
      "https://themedox.com/demo/mykd-tailwind/assets/img/nft/nft_img01.jpg",
    title: "wolf gaming art",
    price: "1.002",
  },
  {
    id: 2,
    photo:
      "https://themedox.com/demo/mykd-tailwind/assets/img/nft/nft_img02.jpg",
    title: "Forest Princess",
    price: "1.053",
  },
  {
    id: 3,
    photo:
      "https://themedox.com/demo/mykd-tailwind/assets/img/nft/nft_img03.jpg",
    title: "girl firefly art",
    price: "1.024",
  },
];
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container bg-black w-full max-w-[1800px] mx-auto  ">
        <div className=" flex flex-col items-center lg:flex-row flex-wrap gap-x-4 justify-center py-20  px-10 ">
          {items.map((item) => (
            <NtfItem {...item} key={item.id} />
          ))}
        </div>
      </div>
      <AboutUs />
      <Members />
      <VideoArea />
      <Roadmap />
      <Trending />
      <Footer />
    </>
  );
}
export default Home;
