import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import s from "./backSlider.module.scss";
import { ImageBox } from "pages/About/About";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Modal from "components/Modal";

const BackSlider = () => {
  const slider = useRef(null);
  const swiper = useRef(null);
  const isInView = useInView(slider, {
    once: true,
  });

  useEffect(() => {
    isInView
      ? swiper.current?.swiper.autoplay.start()
      : swiper.current?.swiper.autoplay.stop();
  }, [isInView]);

  return (
    <div className={s.wr}>
      <Swiper
        ref={swiper}
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
          <PhotoSlide i={1} />
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.slide_flex}>
            <PhotoSlide i={2} />
            <PhotoSlide i={3} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <PhotoSlide i={4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BackSlider;

const PhotoSlide = ({ i }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ImageBox onClick={() => setOpenModal(true)}>
        <div>
          <img
            src={require(`assets/slider/backstage__item0${i}.png`)}
            alt="Backstage"
          />
        </div>
        <div>
          <img
            src={require(`assets/slider/backstage__item0${i}.png`)}
            alt="Backstage"
          />
        </div>
      </ImageBox>
      <Modal open={openModal} setOpen={setOpenModal} className="video_modal">
        <img
          src={require(`assets/slider/backstage__item0${i}.png`)}
          alt="Backstage"
        />
      </Modal>
    </>
  );
};
