import { useState } from "react";
import s from "./video.module.scss";
import Modal from "components/Modal";

const Video = ({
  videoSrc,
  videoUrl = "",
  poster = "",
  label = "",
  fade = "left",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        className={s.wr}
        data-aos={`fade-${fade}`}
        data-aos-duration="1000"
        data-aos-offset={videoSrc === "showreel" ? 0 : 500}
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
              src={require(`assets/video/${videoSrc}.mp4`)}
              type="video/mp4"
            />
            <source
              src={require(`assets/video/${videoSrc}.webm`)}
              type="video/webm"
            />
            Тег video не поддерживается вашим браузером.
          </video>
          <img src={require(`assets/video/${poster}`)} alt=" " />
        </div>
        <Label>{label}</Label>
      </div>
      <Modal open={openModal} setOpen={setOpenModal} className="video_modal">
        <iframe
          title="vimeo-player"
          src={videoUrl}
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
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
