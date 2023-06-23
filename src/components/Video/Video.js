import { useState } from "react";
import s from "./video.module.scss";

const Video = ({ videoSrc, poster = "", label = "", fade = "left" }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={s.wr}
      data-aos={`fade-${fade}`}
      data-aos-duration="1000"
      data-aos-offset="500"
    >
      <div className={s.video_wrapper}>
        <video
          width="100%"
          height="100%"
          loop
          muted="muted"
          preload="auto"
          controls={false}
          playsInline
          onLoadedData={() => setLoaded(true)}
          poster={poster ? require(`assets/video/${poster}`) : undefined}
          onClick={() => setOpenModal(true)}
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => {
            if (loaded) e.target.pause();
          }}
        >
          <source
            src={require(`assets/video/${videoSrc}.webm`)}
            type="video/webm"
          />
          <source
            src={require(`assets/video/${videoSrc}.mp4`)}
            type="video/mp4"
          />
          Тег video не поддерживается вашим браузером.
        </video>
        {/* <video
          muted={true}
          preload="metadata"
          autoPlay={false}
          poster={poster ? require(`assets/video/${poster}`) : undefined}
          className={s.blured}
        >
          <source src={require(`assets/video/${videoSrc}`)} type="video/mp4" />
          Тег video не поддерживается вашим браузером.
        </video> */}
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
