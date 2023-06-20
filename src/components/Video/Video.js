import { useState } from "react";
import s from "./video.module.scss";

const Video = ({ videoSrc, poster = "", label = "" }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={s.wr} data-aos="flip-left">
      <div className={s.video_wrapper}>
        <video
          loop={true}
          muted={true}
          preload="metadata"
          playsInline
          poster={poster ? require(`assets/video/${poster}`) : undefined}
          onClick={() => setOpenModal(true)}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) =>
            setTimeout(() => {
              if (e.target.played) e.target.pause();
            }, 100)
          }
        >
          <source src={require(`assets/video/${videoSrc}`)} type="video/mp4" />
          Тег video не поддерживается вашим браузером.
        </video>
        <video
          muted={true}
          preload="metadata"
          autoPlay={false}
          poster={poster ? require(`assets/video/${poster}`) : undefined}
          className={s.blured}
        >
          <source src={require(`assets/video/${videoSrc}`)} type="video/mp4" />
          Тег video не поддерживается вашим браузером.
        </video>
      </div>
      <Label>{label}</Label>
    </div>
  );
};

export default Video;

const Label = ({ children }) => {
  return (
    <label className={s.label}>
      <div className={s.rec}></div>
      <span>{children}</span>
    </label>
  );
};
