import "./exhibition.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";

const ExhibitionSlider = () => {
  const swiperRef = useRef(null);
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    axios("https://bif.webtm.ru/ru/api/v1/exhibition/sliders/").then(
      ({ data }) => {
        setSliderList(data);
      }
    );
  }, []);
  return (
    <div className="exhibitionPage-slider">
      <div className="container">
        <Swiper
          ref={swiperRef}
          slidesPerView={
            window.screen.width > 576
            ? 2:
            1
          }
          freeMode={true}
          loop={true}
          navigation={false}
          keyboard={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Mousewheel, Keyboard, FreeMode, Autoplay]}
        >
          {sliderList.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="exhibitionPage-slider-slide">
                  {item.image && item.image !== null ? (
                    <img
                      src={item.image}
                      alt=""
                      className="exhibitionPage-slider-slide-img"
                    />
                  ) : (
                    ""
                  )}

                  {item.image_2 && item.image_2 !== null ? (
                    <img
                      src={item.image_2}
                      alt=""
                      className="exhibitionPage-slider-slide-img"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ExhibitionSlider;
