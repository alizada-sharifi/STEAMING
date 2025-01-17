import aboutBg from "../assets/img/area_bg01.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const avatars = [
  {
    id: "1",
    img: "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_tab01.png",
    HeroPhoto:
      "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_img01.jpg",
    name: "human game",
    rate: "50%",
  },
  {
    id: "2",
    img: "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_tab02.png",
    HeroPhoto:
      "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_img02.jpg",
    name: "Axie Infinity",
    rate: "60%",
  },
  {
    id: "3",
    img: "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_tab03.png",
    HeroPhoto:
      "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_img03.jpg",
    name: "The Walking Dead",
    rate: "75%",
  },
  {
    id: "4",
    img: "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_tab04.png",
    HeroPhoto:
      "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_img04.jpg",
    name: "The Dogami",
    rate: "65%",
  },
  {
    id: "5",
    img: "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_tab05.png",
    HeroPhoto:
      "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_img05.jpg",
    name: "The Sandbox",
    rate: "75%",
  },
  {
    id: "6",
    img: "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_tab06.png",
    HeroPhoto:
      "https://themedox.com/demo/mykd-tailwind/assets/img/others/about_img06.jpg",
    name: "Pegaxy Horses",
    rate: "85%",
  },
];
function AboutUs() {
  const [selectedAvatar, setSelectedAvater] = useState(avatars[0]);
  return (
    <>
      <div
        className="bg-[image:var(--image-url)] py-[140px]"
        style={{ "--image-url": `url(${aboutBg})` }}
      >
        <div className="flex flex-col justify-center items-center uppercase  max-w-[1400px] mx-auto px-5 ">
          <p
            className="text-green popin font-semibold  tracking-[2px] mb-3
          "
          >
            know about us
          </p>
          <h1 className="text-white  title font-extrabold tracking-[3px] m-0 sm:text-[35px] sm:leading-[1.1] md:text-[45px] mb-3 ">
            top rated steamers
          </h1>
          <span className="h-1 w-16 rounded-md bg-green mb-10 "></span>
          <div className="btn text-white flex-wrap justify-center gap-y-4 font-bold text-[20px] flex mb-10 gap-x-7">
            <Link className="border-2 border-green px-10 py-2 hover:bg-green hover:text-black">
              BUY HERE
            </Link>
            <Link className="border-2 border-[#ffbe18] px-10 py-2 hover:bg-[#ffbe18] hover:text-black">
              BUY NFTS
            </Link>
          </div>
          <div className="img border-y flex flex-wrap gap-x-4 w-2/3 justify-center py-4  border-green">
            {avatars.map((avatar) => (
              <img
                key={avatar.id}
                src={avatar.img}
                className="cursor-pointer"
                onClick={() => setSelectedAvater(avatar)}
              />
            ))}
          </div>
          {/* avatar section */}
          <div className="py-12  flex gap-y-10 flex-col w-10/12 xl:flex-row items-center xl:w-full">
            <div className="w-full xl:w-5/12">
              <img
                src={selectedAvatar.HeroPhoto}
                alt="hero"
                className="w-full"
              />
            </div>
            <div className="w-full xl:w-7/12    px-[15px]">
              <div className="flex flex-col md:flex-row  gap-5 justify-between ">
                <div className="left w-full md:w-7/12 ">
                  <h1 className="text-white font-bold text-[35px] tracking-[2px]">
                    {selectedAvatar.name}
                  </h1>
                  <h4 className="text-orange font-bold tracking-[1px] mb-4 text-[20px]">
                    rate {selectedAvatar.rate}
                  </h4>
                  <p className="text-[#adb0bc] popin text-md capitalize text-justify">
                    Lorem ipsum dolor sit amet, consteur adipiscing Duis
                    elementum sollicitudin is yaugue euismods Nulla ullamcorper.
                    Morbi pharetra tellus miolslis, tincidunt massa venenatis.
                  </p>
                </div>
                <div className="right w-full md:w-5/12">
                  <div className="bg-gradient-to-r from-[#1f2935_0%] via-[transparent_100%] to-[#10181f_100%] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] flex items-center text-[16px] font-bold translate-x-0  transition-[0.3s] duration-500 mt-0 mb-[11px] mx-0 px-[13px] py-[7px] rounded-[7px] hover:-translate-x-2.5  text-white  ">
                    <img
                      src="https://themedox.com/demo/mykd-tailwind/assets/img/icons/features_icon01.png"
                      alt=""
                    />
                    <h4 className="ml-2">Chichi Dragon Ball</h4>
                  </div>
                  <div className="bg-gradient-to-r from-[#1f2935_0%] via-[transparent_100%] to-[#10181f_100%] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] flex items-center text-[16px] font-bold translate-x-0  transition-[0.3s] duration-500 mt-0 mb-[11px] mx-0 px-[13px] py-[7px] rounded-[7px] hover:-translate-x-2.5  text-white  ">
                    <img
                      src="https://themedox.com/demo/mykd-tailwind/assets/img/icons/features_icon02.png"
                      alt=""
                    />
                    <h4 className="ml-2">Space Babe Night</h4>
                  </div>
                  <div className="bg-gradient-to-r from-[#1f2935_0%] via-[transparent_100%] to-[#10181f_100%] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] flex items-center text-[16px] font-bold translate-x-0  transition-[0.3s] duration-500 mt-0 mb-[11px] mx-0 px-[13px] py-[7px] rounded-[7px] hover:-translate-x-2.5  text-white  ">
                    <img
                      src="https://themedox.com/demo/mykd-tailwind/assets/img/icons/features_icon03.png"
                      alt=""
                    />
                    <h4 className="ml-2">Dragon Ball</h4>
                  </div>
                </div>
              </div>
              <ul className="list-wrap my-16 p-0 flex items-center gap-[7px_7px] sm:flex-wrap xsm:flex-wrap">
                <li className="flex-auto ">
                  <Link
                    className=" block bg-[#1f2935] bg-[linear-gradient(0deg,#10181f_0%,_transparent_0%,#141a20_100%)] uppercase text-[16px] font-bold text-[#adb0bc] text-center tracking-[1px] px-[30px] py-[25px] hover:text-[#45f882] font-Barlow
                             sm:p-[13px_30px] xsm:p-[13px_30px]
                            "
                  >
                    DRAGON BALL
                  </Link>
                </li>
                <li className="flex-auto ">
                  <Link
                    className=" block bg-[#1f2935] bg-[linear-gradient(0deg,#10181f_0%,_transparent_0%,#141a20_100%)] uppercase text-[16px] font-bold text-[#adb0bc] text-center tracking-[1px] px-[30px] py-[25px] hover:text-[#45f882] font-Barlow
                             sm:p-[13px_30px] xsm:p-[13px_30px]
                            "
                  >
                    NFT MARKET
                  </Link>
                </li>
                <li className="flex-auto ">
                  <Link
                    className=" block bg-[#1f2935] bg-[linear-gradient(0deg,#10181f_0%,_transparent_0%,#141a20_100%)] uppercase text-[16px] font-bold text-[#adb0bc] text-center tracking-[1px] px-[30px] py-[25px] hover:text-[#45f882] font-Barlow
                             sm:p-[13px_30px] xsm:p-[13px_30px]
                            "
                  >
                    SUPPORT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
