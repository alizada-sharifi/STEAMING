import { Virtual, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import fire from "../assets/img/fire.png";
import TrendingItem from "./TrendingItem";
import icon1 from "../assets/img/nft_avatar.png";
import icon2 from "../assets/img/nft_avatar02.png";
import icon3 from "../assets/img/nft_avatar03.png";
import monster1 from "../assets/img/nft_img04.jpg";
import monster2 from "../assets/img/nft_img05.jpg";
import monster3 from "../assets/img/nft_img06.jpg";
import monster4 from "../assets/img/nft_img07.jpg";
import monster5 from "../assets/img/nft_img08.jpg";

const Items = [
  {
    id: 1,
    userImg: icon1,
    name: "Crypto Max",
    img: monster1,
    price: "1.002",
  },
  {
    id: 2,
    userImg: icon2,
    name: "Golden Crypto",
    img: monster2,
    price: "1.004",
  },
  {
    id: 3,
    userImg: icon3,
    name: "Black Crypto",
    img: monster3,
    price: "1.005",
  },
  {
    id: 4,
    userImg: icon1,
    name: "Luck Crypto",
    img: monster4,
    price: "1.005",
  },
  {
    id: 5,
    userImg: icon2,
    name: "King Crypto",
    img: monster5,
    price: "1.006",
  },
];

function Trending() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="bg-[#10181f] py-12">
      <div className="container max-w-[1400px] mx-auto px-5">
        <div className="header flex flex-col items-center gap-3 md:flex-row justify-between">
          <div className="title flex gap-x-4">
            <h2 className="text-white text-4xl font-bold tracking-[1px]">
              TOP TRENDING
            </h2>
            <img src={fire} width={35} alt="fire icon" />
          </div>
          <div className="btn flex text-white gap-x-3">
            <button
              onClick={handlePrev}
              className="border-2 h-8 w-8 border-white rounded-full hover:text-green hover:border-green"
            >
              <IoIosArrowBack size="25px" />
            </button>
            <button
              onClick={handleNext}
              className="border-2 h-8 w-8 border-white rounded-full hover:text-green hover:border-green"
            >
              <IoIosArrowForward size="25px" />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Virtual, Navigation, Pagination]}
          centeredSlides={true}
          loop={true}
          spaceBetween={10}
          className="flex justify-center"
        >
          {Items.map((item) => (
            <SwiperSlide key={item.id}>
              <TrendingItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;
