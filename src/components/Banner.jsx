import "./Banner.css";

import hero from "../assets/img/img04.png";

function Banner() {
  return (
    <>
      <div className="bgImg bg-cover mx-0 px-0">
        <div className="container max-w-[1400px] pt-[100px]  px-3  mx-auto">
          <section className="banner flex items-center flex-col gap-y-12 gap-x-7 justify-center md:flex-row md:justify-between text-white ">
            <div className="flex flex-col justify-center items-center md:block ">
              <section className="live w-[250px] md:w-[300px] h-[60px] rounded-xl flex  relative    ">
                <p className="h-full text-[20px] tracking-[3px] font-bold absolute uppercase text-green text ">
                  live gaming
                </p>
              </section>
              <h1 className="bgText tracking-[4px] font-bold text-[40px] md:text-[70px] bai ">
                STEAMING
              </h1>
              <p className="text text-[20px] md:text-[30px] popin font-bold tracking-[3px] mb-4 ">
                VIDEO GAMES ONLINE
              </p>

              <button className=" font-semibold px-12 text-black py-2 rounded-lg shadow-lg transform  transition duration-300 text-[30px] relative">
                <span className="absolute inset-0  bg-green -z-10 rounded-md clip-path-custom hover:bg-white  "></span>
                Contact Us
              </button>
            </div>
            <div>
              <img src={hero} className="w-full" alt="hero" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Banner;
