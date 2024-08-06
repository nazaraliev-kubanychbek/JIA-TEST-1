import styles from "./SwiperSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper.css";
import rightBorder from '@img/homeSwiperRight.svg'
import leftBorder from '@img/homeSwiperLeft.svg'
import imgMan from "@img/q.png";
import {
  FreeMode,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@hooks/usemedia/useMedia";
import axios from "axios";
import { useSelector } from "react-redux";


export const SwiperSection = () => {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);

  const wMobile = useMediaQuery("(max-width: 700px)");
  const wTablet = useMediaQuery("(max-width: 1024px)");
  const wLap = useMediaQuery("(max-width: 1300px)");
  const preView = wMobile ? "1" : wTablet ? "2" : wLap ? "2.5" : "4";
  const [title1, setTitle1] = useState({});
  const [title2, setTitle2] = useState({});
  const [sliderData1, setSliderData1] = useState([]);
  const [sliderData2, setSliderData2] = useState([]);
  const lang = useSelector(s => s.reducer.lang);

  useEffect(()=>{
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/slider_title/`)
    .then(({data}) => setTitle1(data[0]));
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/slider_sponsor_title/`)
    .then(({data}) => setTitle2(data[0]));
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/slider/`)
    .then(({data})=> setSliderData1(data));
    axios(`https://bif.webtm.ru/${lang}/api/v1/base/slider_sponsor/`)
    .then(({data})=> setSliderData2(data));
  },[lang])
  return (
    <section className="container">
      <div className={styles.container}>
        <img src={leftBorder} alt="" className={styles.leftBorder} />
        <img src={rightBorder} alt="" className={styles.rightBorder}/>

        <div className={styles.slides}>
          <h2>{title1.title}</h2>
          <div className={`${styles.swiperCont} ${styles.swiperCont_reverse}`}>
            <Swiper
              ref={swiperRef}
              slidesPerView={preView}
              freeMode={true}
              loop={true}
              navigation={false}
              keyboard={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Mousewheel, Keyboard, FreeMode, Autoplay]}
            >
              {sliderData1.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={`${styles.swiperItem} ${styles.swiperItem_reverse}`}>
                    <div className={styles.photo}>
                      <img src={item.image} alt="manPhoto" />
                    </div>
                    <p>{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.prevButtonOne}
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                  fill="#FFC727"
                />
              </svg>
            </button>
            <button
              className={styles.nextButtonOne}
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                  fill="#FFC727"
                />
              </svg>
            </button>
          </div>
        </div>
              <div className={styles.swiderLine}></div>
        <div className={styles.slides}>
          <h2>{title2.title}</h2>
          <div className={styles.swiperCont}>
            <Swiper
              ref={swiperRef2}
              slidesPerView={preView}
              freeMode={true}
              loop={true}
              navigation={false}
              keyboard={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

              modules={[Navigation, Mousewheel, Keyboard, FreeMode, Autoplay]}
            >
              {sliderData2.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.swiperItem}>
                    <div className={styles.photo}>
                      <img src={item.image} alt="manPhoto" />
                    </div>
                    <p>{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.prevButton}
              onClick={() => swiperRef2.current.swiper.slidePrev()}
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                  fill="#FFC727"
                />
              </svg>
            </button>
            <button
              className={styles.nextButton}
              onClick={() => swiperRef2.current.swiper.slideNext()}
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                  fill="#FFC727"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
