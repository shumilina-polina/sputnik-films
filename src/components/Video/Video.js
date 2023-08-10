import { useEffect, useState } from "react";
import s from "./video.module.scss";
import Modal from "components/Modal";
import cn from "classnames";
import { useInView } from "react-spring";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";

const Video = ({
  videoSrc,
  videoUrl = "",
  poster = "",
  posterBlur = "",
  label = "",
  route = "",
}) => {
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
    // isMobile && inView && loaded ? video.current.play() : video.current.pause();
  }, [inView]);

  return (
    <div className={s.section}>
      <div className={cn(route === "port" ? s.wr_port : s.wr)}>
        <div className={s.video_wrapper}>
          {route === "port" && isMobile ? (
            poster && (
              <img
                onClick={() => setOpenModal(true)}
                src={require(`assets/video/${poster}`)}
                alt="poster"
              />
            )
          ) : (
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
                autoPlay={
                  videoSrc === "showreel" && route === "" ? true : false
                }
                onLoadedData={() => setLoaded(true)}
                poster={poster ? require(`assets/video/${poster}`) : undefined}
                onClick={() => setOpenModal(true)}
                onMouseOver={(e) => {
                  e.target.play();
                  // if (loaded) e.target.play();
                }}
                onMouseOut={(e) => {
                  if (loaded && (videoSrc !== "showreel" || route === "port")) {
                    e.target.pause();
                    if (videoSrc === "showreel" && route === "") {
                      e.target.autoplay = false;
                    }
                    e.target.load();
                  }
                }}
                // src={require(`assets/video/${videoSrc}.webm`)}
                // type={"video/webm"}
                src={
                  isMobile
                    ? require(`assets/video/${videoSrc}.mp4`)
                    : require(`assets/video/${videoSrc}.webm`)
                }
                type={isMobile ? "video/mp4" : "video/webm"}
              >
                Тег video не поддерживается вашим браузером.
              </video>
              {poster && route !== "port" && (
                <img
                  className={s.image_blur}
                  src={require(`assets/video/${posterBlur}-blur.png`)}
                  alt="poster"
                />
              )}
            </>
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
