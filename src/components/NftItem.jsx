import { Link } from "react-router-dom";
import avatar from "../assets/img/nft_avatar.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function NtfItem({ photo, title, price }) {
  return (
    <>
      <div className=" flex  justify-between w-4/6  lg:w-[48%] xl:w-[32%] flex-col gap-y-4 items-center sm:flex-row md:items-end bg-[#121a23] bg-[linear-gradient(0deg,#0c0e12_0%,rgba(31,41,53,0.36078)_100%)] border transition-all duration-[0.3s] ease-[ease-out] delay-[0s] mt-0 mb-[30px] mx-0 p-[25px] rounded-lg border-solid border-[rgba(76,76,76,0.2)] hover:border-[rgba(69,248,130,0.2)]    ">
        <div
          className=" flex-[0_0_auto]  max-w-[187px] lg:max-w-[170px] mr-5 xl:max-w-[170px] md:max-w-[187px] sm:m-[0_20px_0_0] xsm:m-[0_auto_25px]
              "
        >
          <Link>
            <img src={photo} className="rounded-lg" />
          </Link>
        </div>
        <div className="content">
          <h4 className="text-[20px] tracking-[0.5px] font-bold mt-0 mb-[15px] mx-0 uppercase text-white ">
            {title}
          </h4>
          <div className="flex gap-x-2 items-center mb-3 mr-2.5 ">
            <Link>
              <img src={avatar} />
            </Link>
            <div className="flex items-center">
              <h5 className="name text-[18px] font-semibold text-[#9b9b9b] capitalize m-0">
                Alax Max
              </h5>
              <span className="designation text-xs font-medium uppercase text-[#9b9b9b] before:content-['|'] before:inline-block before:text-xs before:font-medium before:text-[#434343] before:pl-2.5 before:pr-2 before:py-0">
                Creator
              </span>
            </div>
          </div>
          <div>
            <div className=" flex items-center gap-x-3 bg-[#121a23] bg-[linear-gradient(0deg,rgb(12,14,18)_0%,rgb(16,24,31)_100%)] border pl-5 pr-[15px] py-3.5 rounded-lg border-solid border-[rgba(76,76,76,0.5)]">
              <p className="text-[18px] text-[#e8e8e8] font-semibold  ">
                {price}
                <span className="font-bold  uppercase text-[#ffbe18]">
                  {" "}
                  ETH
                </span>
              </p>
              <Link className="bid-btn flex items-center gap-x-2.5 text-[#201f2a] capitalize font-semibold text-[18px] leading-none ml-auto px-3.5 py-[11px] rounded-md font-Barlow bg-[#ffbe18] hover:bg-[#45f882]">
                Bid
                <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NtfItem;
