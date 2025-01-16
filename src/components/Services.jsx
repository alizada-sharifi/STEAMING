import { IoDiamondOutline, IoSettingsOutline } from "react-icons/io5";
import { FaUserGear, FaEthereum } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { Autoplay, EffectCreative } from "swiper/modules";
import gallery1 from "../assets/img/gallery01.jpg";
import gallery2 from "../assets/img/gallery02.jpg";
import gallery3 from "../assets/img/gallery03.jpg";
import gallery4 from "../assets/img/gallery04.jpg";
import gallery5 from "../assets/img/gallery05.jpg";
const Galleries = [
  {
    id: 1,
    img: gallery1,
  },
  {
    id: 2,
    img: gallery2,
  },
  {
    id: 3,
    img: gallery3,
  },
  {
    id: 4,
    img: gallery4,
  },
  {
    id: 5,
    img: gallery5,
  },
];

function Services() {
  return (
    <div className=" bg-[#040608] py-32">
      <div className="contaienr max-w-[1400px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-center">
          <div className="left  text-white">
            <div className="title text-center ">
              <span className="text-green tracking-[2px] font-semibold   ">
                POWERFUL SERVICES
              </span>
              <h3 className=" py-4 w-[95%]  text-2xl md:text-4xl popin font-extrabold tracking-[2px] uppercase">
                Our Powerful Services Done on time
              </h3>
            </div>

            <div className="feature my-9 flex flex-col sm:flex-row gap-y-5 gap-x-14">
              <div className="item text-center md:text-left  ">
                <IoDiamondOutline
                  size="40px"
                  color="#45f882"
                  className="m-auto md:m-0 "
                />

                <Link className="text-white hover:text-green ">
                  <h4 className="my-4 text-2xl font-semibold ">
                    Year Experience
                  </h4>
                </Link>
                <p className="text-base text-[#abb0bc] popin leading-5">
                  Lorem ipsum dolor sitamet const adipiscng Duis eletum
                  sollicitudin is yaugue euismods
                </p>
              </div>
              <div className="item text-center md:text-left  ">
                <FaUserGear
                  size="40px"
                  color="#45f882"
                  className="m-auto md:m-0"
                />
                <Link className="text-white hover:text-green ">
                  <h4 className="my-4 text-2xl font-semibold ">Expert Teams</h4>
                </Link>
                <p className="text-base text-[#abb0bc] popin leading-5">
                  Lorem ipsum dolor sitamet const adipiscng Duis eletum
                  sollicitudin is yaugue euismods
                </p>
              </div>
            </div>
            <div className="feature  flex flex-col sm:flex-row  gap-y-5 gap-x-14">
              <div className="item text-center md:text-left">
                <FaEthereum
                  size="40px"
                  color="#45f882"
                  className="m-auto md:m-0"
                />
                <Link className="text-white hover:text-green ">
                  <h4 className="my-4 text-2xl font-semibold ">
                    Best NFT Game
                  </h4>
                </Link>
                <p className="text-base text-[#abb0bc] popin leading-5">
                  Lorem ipsum dolor sitamet const adipiscng Duis eletum
                  sollicitudin is yaugue euismods
                </p>
              </div>
              <div className="item text-center md:text-left">
                <IoSettingsOutline
                  size="40px"
                  color="#45f882"
                  className="m-auto md:m-0"
                />
                <Link className="text-white hover:text-green ">
                  <h4 className="my-4 text-2xl font-semibold ">
                    Worldwide Client
                  </h4>
                </Link>
                <p className="text-base text-[#abb0bc] popin leading-5">
                  Lorem ipsum dolor sitamet const adipiscng Duis eletum
                  sollicitudin is yaugue euismods
                </p>
              </div>
            </div>
          </div>
          <div className="right w-full lg:w-1/2 relative">
            <Swiper
              modules={[Autoplay, EffectCreative]}
              grabCursor={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }} //
              effect={"creative"}
              loop={true}
              className="w-full h-full"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
            >
              {Galleries.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    className="w-full h-full rounded-md"
                    src={item.img}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Link className=" absolute z-30 right-[-30px] bottom-[-30px]  text-[98px] flex items-center justify-center rotate-45 text-black overflow-hidden rounded-[50%] hover:text-black hover:rotate-0 bg-[#faa706] lg:w-[120px] lg:h-[120px] lg:text-[70px] lg:right-0 lg:bottom-[-30px] md:w-[120px] md:h-[120px] md:text-[70px] md:right-0 md:bottom-[-30px] sm:w-20 sm:h-20 sm:text-[45px] sm:right-0 sm:bottom-[-30px] xsm:w-20 xsm:h-20 xsm:text-[45px] xsm:right-0 xsm:bottom-[-30px]">
              <GoArrowRight size="110px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
