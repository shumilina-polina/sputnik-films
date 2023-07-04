import { useState } from "react";
import s from "./video.module.scss";
import Modal from "components/Modal";
import cn from "classnames";

const Video = ({
  videoSrc,
  videoUrl = "",
  poster = "",
  label = "",
  route = "",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={s.section}>
      <div className={cn(route === "port" ? s.wr_port : s.wr)}>
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
            {/* <source
              src={require(`assets/video/${videoSrc}.webm`)}
              type="video/webm"
            /> */}
            Тег video не поддерживается вашим браузером.
          </video>
          <img src={require(`assets/video/${poster}`)} alt="poster" />
        </div>
        <Label>{label}</Label>
      </div>
      <Modal open={openModal} setOpen={setOpenModal} className="video_modal">
        <iframe
          title="vimeo-player"
          src={videoUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
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
