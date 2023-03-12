// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

export default () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(isMobile);
  });

  // finally you can render components conditionally if isMobile is True or False

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={0}
      navigation
      loop={true}
    >
      <SwiperSlide className="video-background aspect-video">
        <div className="grid h-full place-items-center text-fluid-xl">1</div>
      </SwiperSlide>
      <SwiperSlide className="video-background aspect-video">
        <div className="grid h-full place-items-center text-fluid-xl">2</div>
      </SwiperSlide>
      <SwiperSlide className="video-background aspect-video">
        <div className="grid h-full place-items-center text-fluid-xl">3</div>
      </SwiperSlide>
      <SwiperSlide className="video-background aspect-video">
        <div className="grid h-full place-items-center text-fluid-xl">4</div>
      </SwiperSlide>
    </Swiper>
  );
};
