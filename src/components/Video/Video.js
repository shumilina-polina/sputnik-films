import { useEffect, useState } from "react";
import s from "./video.module.scss";
import Modal from "components/Modal";
import { useInView } from "react-spring";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";

const Video = ({ videoSrc, videoUrl, poster, posterBlur, label }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [video, inView] = useInView();
  const isMobile = useMediaQuery(breakpoints.mobile);

  useEffect(() => {
    setLoaded(false);
  }, [videoSrc]);

  useEffect(() => {
    if (isMobile) {
      inView ? video.current?.play() : video.current?.pause();
    }
  }, [inView]);

  return (
    <div className={s.section}>
      <div className={s.wr}>
        <div className={s.video_wrapper}>
          <>
            <video
              ref={video}
              width="100%"
              height="100%"
              loop
              muted="muted"
              preload="metadata"
              controls={false}
              playsInline
              autoPlay={videoSrc === "showreel" ? true : false}
              onLoadedData={() => setLoaded(true)}
              poster={require(`assets/video/${poster}`)}
              onClick={() => setOpenModal(true)}
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => {
                if (loaded && videoSrc !== "showreel") {
                  e.target.pause();
                  e.target.load();
                }
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
            <img
              className={s.image_blur}
              src={require(`assets/video/${posterBlur}-blur.png`)}
              alt="poster-blur"
            />
          </>
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
