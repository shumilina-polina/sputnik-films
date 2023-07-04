import { useState } from "react";
import s from "./video.module.scss";
import Modal from "components/Modal";
import cn from "classnames";
import { useEffect } from "react";
import { useRef } from "react";

const Video = ({
  videoSrc,
  videoUrl = "",
  poster = "",
  label = "",
  route = "",
}) => {
  const video = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    play ? video.current.play() : video.current.pause();
  }, [play, video]);

  return (
    <div className={s.section}>
      <div className={cn(route === "port" ? s.wr_port : s.wr)}>
        <div className={s.video_wrapper}>
          <video
            width="100%"
            height="100%"
            loop
            ref={video}
            muted="muted"
            preload="metadata"
            controls={false}
            playsInline
            onLoadedData={() => setLoaded(true)}
            poster={poster ? require(`assets/video/${poster}`) : undefined}
            onClick={() => setOpenModal(true)}
            onMouseOver={() => setPlay(true)}
            onMouseOut={() => {
              if (loaded) setPlay(false);
            }}
            src={require(`assets/video/${videoSrc}.mp4`)}
            type="video/mp4"
          >
            Тег video не поддерживается вашим браузером.
          </video>
          {poster && (
            <img src={require(`assets/video/${poster}`)} alt="poster" />
          )}
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
