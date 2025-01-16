import { Link } from "react-router-dom";
import bgImage from "../assets/img/trendnft_img.png";
import { FaLongArrowAltRight, FaRegHeart, FaEthereum } from "react-icons/fa";
function TrendingItem({ userImg, name, img, price }) {
  return (
    <div
      style={{
        "--image-url": `url(${bgImage})`,
        backgroundImage: "var(--image-url)",
      }}
      className="card max-w-[402px] mt-3 p-4 bg-no-repeat"
    >
      <div className="heading flex justify-between items-center text-white ">
        <div className="flex gap-x-3 ">
          <img src={userImg} />
          <div>
            <p>{name}</p>
            <Link className="underline text-[#adb0bc] hover:text-green">
              @Jon Max
            </Link>
          </div>
        </div>
        <FaRegHeart size="20px" className="hover:text-green cursor-pointer" />
      </div>
      <div className="content">
        <Link className="">
          <img src={img} className=" rounded-lg my-4  h-full w-full" alt="" />
        </Link>
        <div className="footer w-[95%] flex justify-between items-center ">
          <div className="price">
            <p className="text-[#adb0bc] text-sm popin">Last Bid</p>
            <div className="flex items-center ">
              <FaEthereum color="#ffbe18" />
              <p className="text-white font-bold tracking-wide text-xl">
                {price} <span className="text-orange">ETH</span>
              </p>
            </div>
          </div>
          <div>
            <Link className="bid-btn flex items-center gap-x-2.5 text-[#201f2a] capitalize font-semibold text-[18px] leading-none ml-auto px-3.5 py-[11px] rounded-md font-Barlow bg-[#ffbe18] hover:bg-[#45f882]">
              Bid
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrendingItem;
