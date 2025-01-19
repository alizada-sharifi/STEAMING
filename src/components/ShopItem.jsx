import { Link } from "react-router-dom";
import bgImage from "../assets/img/trendnft_img.png";
import { FaRegHeart } from "react-icons/fa6";
function ShopItem({ photo, title, catagory, price }) {
  return (
    <div className="col">
      <div
        className="bg-cover px-3 bg-center  py-4 "
        style={{
          "--image-url": `url(${bgImage})`,
          backgroundImage: "var(--image-url)",
        }}
      >
        <div className=" relative flex items-center justify-center rounded-lg bg-[#0f161b] ">
          <Link>
            <img src={photo} alt="" />
          </Link>
          <button className=" absolute leading-none text-[#adb0bc] right-[18px] top-[18px] hover:text-green">
            <FaRegHeart />
          </button>
        </div>
        <div className=" block w-full h-px opacity-15 mt-[18px] mb-[25px] mx-0 bg-[radial-gradient(circle,#f5f6f9_0%,#ffffff00_100%)]"></div>
        <div className="desc  flex items-center justify-between leading-none mb-3">
          <h4 className=" text-lg leading-none grow whitespace-nowrap overflow-hidden text-ellipsis m-0">
            <Link className=" text-white font-bold text-xl hover:text-green">
              {title}
            </Link>
          </h4>
          <div className=" text-lg font-bold text-[#45f882] ml-5">${price}</div>
        </div>
        <div className=" block leading-none text-sm font-medium text-[#adb0bc] uppercase">
          <Link className=" text-[#adb0bc] hover:text-green">{catagory}</Link>
        </div>
      </div>
    </div>
  );
}
export default ShopItem;
