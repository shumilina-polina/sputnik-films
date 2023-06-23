import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import s from "./backSlider.module.scss";
import { ImageBox } from "pages/About/About";

const BackSlider = () => {
  return (
    <div className={s.wr}>
      <Swiper
        speed={1000}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        className={s.slider}
        spaceBetween={36}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={s.slide}>
          <ImageBox>
            <div>
              <img
                src={require("assets/slider/backstage__item01.png")}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("assets/slider/backstage__item01.png")}
                alt=""
              />
            </div>
          </ImageBox>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.slide_flex}>
            <ImageBox>
              <div>
                <img
                  src={require("assets/slider/backstage__item02.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require("assets/slider/backstage__item02.png")}
                  alt=""
                />
              </div>
            </ImageBox>
            <ImageBox>
              <div>
                <img
                  src={require("assets/slider/backstage__item03.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require("assets/slider/backstage__item03.png")}
                  alt=""
                />
              </div>
            </ImageBox>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <ImageBox>
            <div>
              <img
                src={require("assets/slider/backstage__item04.png")}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("assets/slider/backstage__item04.png")}
                alt=""
              />
            </div>
          </ImageBox>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BackSlider;
