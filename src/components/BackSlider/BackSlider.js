import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import s from "./backSlider.module.scss";
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
        mousewheel={true}
        allowTouchMove={true}
        speed={1000}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Scrollbar, Autoplay]}
        slidesPerView={"auto"}
        className={s.slider}
        spaceBetween={13}
        breakpoints={{
          450: {
            spaceBetween: 36,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={s.slide_big}>
          <PhotoSlide i={1} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_flex}>
          <PhotoSlide i={2} />
          <PhotoSlide i={3} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_small}>
          <PhotoSlide i={4} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_flex}>
          <PhotoSlide i={5} />
          <PhotoSlide i={6} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_big}>
          <PhotoSlide i={7} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_flex}>
          <PhotoSlide i={8} />
          <PhotoSlide i={9} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_small}>
          <PhotoSlide i={10} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_flex}>
          <PhotoSlide i={11} />
          <PhotoSlide i={12} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_big}>
          <PhotoSlide i={13} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_flex}>
          <PhotoSlide i={14} />
          <PhotoSlide i={15} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_small}>
          <PhotoSlide i={16} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_flex}>
          <PhotoSlide i={17} />
          <PhotoSlide i={18} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_big}>
          <PhotoSlide i={19} />
        </SwiperSlide>
        <SwiperSlide className={s.slide_flex}>
          <PhotoSlide i={20} />
          <PhotoSlide i={21} />
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
      <div onClick={() => setOpenModal(true)}>
        <img
          src={require(`assets/slider/backstage__item0${i}.jpg`)}
          alt="Backstage"
        />
      </div>
      <Modal open={openModal} setOpen={setOpenModal} className="image_modal">
        <img
          src={require(`assets/slider/backstage__item0${i}-good.jpg`)}
          alt="Backstage"
        />
      </Modal>
    </>
  );
};
