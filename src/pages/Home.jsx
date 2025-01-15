import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Members from "../components/Members";
import NtfItem from "../components/NftItem";
import Navbar from "../components/Navbar";
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
      <Gallery />
      <Members />
      <Footer />
    </>
  );
}
export default Home;
