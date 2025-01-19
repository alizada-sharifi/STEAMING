import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoSearch } from "react-icons/io5";
import { MdArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import bgImage from "../assets/img/breadcrumb_bg02.jpg";
import product01 from "../assets/img/product01.jpg";
import product02 from "../assets/img/product02.jpg";
import product03 from "../assets/img/product03.jpg";
import product04 from "../assets/img/product04.jpg";
import product05 from "../assets/img/product05.jpg";
import product06 from "../assets/img/product06.jpg";
import product07 from "../assets/img/product07.jpg";
import product08 from "../assets/img/product08.jpg";
import product09 from "../assets/img/product09.jpg";
const products = [
  {
    id: 1,
    photo: product01,
    title: "Nintendo Switch",
    catagory: "E-SPORTS",
    price: 29,
  },
  {
    id: 2,
    photo: product02,
    title: "Headphone",
    catagory: "accessories",
    price: 69,
  },
  {
    id: 3,
    photo: product03,
    title: "replica Axe",
    catagory: "E-SPORTS",
    price: 39,
  },
  {
    id: 4,
    photo: product04,
    title: "ps5 controller",
    catagory: "accessories",
    price: 49,
  },
  {
    id: 5,
    photo: product05,
    title: "Golden Crown",
    catagory: "gaming",
    price: 19,
  },
  {
    id: 6,
    photo: product06,
    title: "gaming mouse",
    catagory: "accessories",
    price: 49,
  },
  {
    id: 7,
    photo: product07,
    title: "Headphone - X",
    catagory: "accessories",
    price: 29,
  },
  {
    id: 8,
    photo: product08,
    title: "replica gun",
    catagory: "E-SPORTS",
    price: 59,
  },
  {
    id: 9,
    photo: product09,
    title: "gun robot",
    catagory: "E-SPORTS",
    price: 109,
  },
];
const TrendingProducts = [
  {
    id: 1,
    photo: product02,
    title: "Headphone",
    price: 350,
  },
  {
    id: 2,
    photo: product03,
    title: "Replika Axe",
    price: "230",
  },
  {
    id: 3,
    photo: product06,
    title: "Ultima Axe",
    price: 120,
  },
];
// ================= styles
import { h4Style, divStyle } from "../components/DetailArea";
import PriceFilter from "../components/PriceFilter";
import ShopItem from "../components/ShopItem";
const liStyle =
  "flex cursor-pointer items-center justify-center md:w-12  md:h-12 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-[#171d24] border border-[#333] text-[#adb0bc] font-bold rounded-[5px] border-solid  w-10 h-10 text-sm";
function Shop() {
  return (
    <>
      <Navbar />
      {/* --------------------- Banner section ------------ */}
      <div
        className="py-40 px-5 w-full uppercase text-white text-center bg-cover bg-center "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl popin mb-8">
          NFT Collections
        </h1>
        <div className="flex items-center justify-center ">
          <Link to="/">
            <span className="uppercase text-green hover:text-orange font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] after:bg-[#45f882] hover:after:bg-[#ffbe18]">
              home
            </span>
          </Link>
          <span className="uppercase font-bold popin">Our Shop</span>
        </div>
      </div>
      {/* ============== detail section */}
      <div className="py-28  bg-[#0f161b]">
        <div className="container max-w-[1400px] mx-auto px-6 gap-14 flex flex-col lg:flex-row  ">
          <div className="items w-full xl:w-9/12 ">
            <div className="heading mb-4  text-[#adb0bc] flex flex-col md:flex-row gap-y-5 justify-between items-center">
              <p className="uppercase font-medium ">
                Showing 1 - 9 of 15 results
              </p>
              <div className="selectArea w-[187px]">
                <select
                  name=""
                  className="orderby font-bold !bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-[#171d24] border border-[none] text-[#adb0bc]  text-[14px] capitalize appearance-none w-full pl-5 pr-10 py-3 rounded-[5px] border-solid border-[#333333] focus:!ring-0 focus:!border-[#333333] focus-visible:!ring-0 focus-visible:!border-[#333333] focus-visible:!border-[none] focus-visible:outline-none"
                  id=""
                >
                  <option value="Default sorting">Default sorting</option>
                  <option value="Sort by popularity">Sort by popularity</option>
                  <option value="Sort by average rating">
                    Sort by average rating
                  </option>
                  <option value="Sort by latest">Sort by latest</option>
                  <option value="Sort by latest">Sort by latest</option>
                </select>
              </div>
            </div>
            <div className=" grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-6">
              {products.map((product) => (
                <ShopItem {...product} key={product.id} />
              ))}
            </div>
            <div className="pagination mt-5">
              <ul className=" flex !flex-wrap   justify-center gap-2 md:gap-3 ">
                <li className={liStyle}>01</li>
                <li className={liStyle}>02</li>
                <li className={liStyle}>03</li>
                <li className={liStyle}>....</li>
                <li className={liStyle}>{<MdKeyboardDoubleArrowRight />}</li>
              </ul>
            </div>
          </div>
          <div className="w-10/12 md:w-6/12 lg:w-3/12 mx-auto text-white">
            <div className="search border-[#333] border mb-10 rounded-[5px]">
              <div className="flex items-center ">
                <MdArrowRight size="30px" color="#45f882" />
                <h4 className={h4Style}>SEARCH</h4>
              </div>
              <div className={divStyle}>
                <div className=" flex items-center justify-between leading-none">
                  <input
                    type="text"
                    className=" block w-[95%] font-medium  border-0  bg-transparent placeholder:opacity-[0.63] text-lg placeholder:font-medium outline-none text-[#adb0bc]"
                    placeholder="Search here"
                  />
                  <button className=" text-[#adb0bc] text-lg  hover:text-[#45f882]">
                    <IoSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className="filter border-[#333] border mb-10 rounded-[5px]">
              <div className="flex items-center ">
                <MdArrowRight size="30px" color="#45f882" />
                <h4 className={h4Style}>filter by price</h4>
              </div>
              <div className={divStyle}>
                <PriceFilter />
              </div>
            </div>

            <div className="Trending border-[#232a30] border mb-10 rounded-[5px]">
              <div className="flex items-center ">
                <MdArrowRight size="30px" color="#45f882" />
                <h4 className={h4Style}>TRENDING MATCHES</h4>
              </div>
              <div className={`${divStyle} pb-0`}>
                {TrendingProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between pb-5 items-center"
                  >
                    <div className="item flex items-center gap-x-4">
                      <div className="w-[70px] overflow-hidden rounded-md border border-[#333]">
                        <Link>
                          <img src={item.photo} className="max-w-full" alt="" />
                        </Link>
                      </div>
                      <div>
                        <Link
                          className={`${h4Style} hover:text-green  !px-0 !py-0  `}
                        >
                          {item.title}
                        </Link>
                        <span className="font-bold text-[#adb0bc] block mt-1">
                          $ {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="Trending border-[#232a30] border mb-10 uppercase rounded-[5px]">
              <div className="flex items-center ">
                <MdArrowRight size="30px" color="#45f882" />
                <h4 className={h4Style}>Categories</h4>
              </div>
              <div className={`${divStyle} text-[#adb0bc] font-medium`}>
                <div className="flex justify-between border-b border-[#333] pb-3">
                  <Link className="hover:text-white">controller</Link>
                  <span>12</span>
                </div>
                <div className="flex justify-between border-b border-[#333] py-3">
                  <Link className="hover:text-white">Headphone</Link>
                  <span>03</span>
                </div>
                <div className="flex justify-between border-b border-[#333] py-3">
                  <Link className="hover:text-white">TOURNAMENTS</Link>
                  <span>18</span>
                </div>
                <div className="flex justify-between  pt-3">
                  <Link className="hover:text-white">E-SPORTS</Link>
                  <span>05 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
