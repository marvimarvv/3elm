// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

export default ({ className }) => {
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
  });

  // finally you can render components conditionally if isMobile is True or False
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      navigation
      loop={true}
      className={className}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="video-background aspect-video">
        <div className="grid place-items-center">
          {/* The left property is added for Safari where the slides are wrongly positioned otherwise */}
          <div className="absolute left-[10.5%] top-[3%] h-[94%] w-[79%] overflow-hidden rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/24BW--klGCE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="video-background aspect-video">
        <div className="grid place-items-center">
          {/* The left property is added for Safari where the slides are wrongly positioned otherwise */}
          <div className="absolute left-[10.5%] top-[3%] h-[94%] w-[79%] overflow-hidden rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/Yf0Dc97SBE0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
