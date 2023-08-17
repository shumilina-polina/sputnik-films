import { useState } from "react";
import s from "./videoPortfolio.module.scss";
import Modal from "components/Modal";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";

const VideoPortfolio = ({
  videoSrc,
  videoUrl = "",
  poster = "",
  label = "",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <div className={s.section}>
      <div className={s.wr_port}>
        <div className={s.video_wrapper}>
          {isMobile ? (
            poster && (
              <img
                onClick={() => setOpenModal(true)}
                src={require(`assets/video/${poster}`)}
                alt="poster"
              />
            )
          ) : (
            <video
              loop
              muted="muted"
              preload="none"
              playsInline
              poster={poster ? require(`assets/video/${poster}`) : undefined}
              onClick={() => setOpenModal(true)}
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => {
                e.target.pause();
                e.target.load();
              }}
              src={require(`assets/video/${videoSrc}.webm`)}
              type={"video/webm"}
            >
              Тег video не поддерживается вашим браузером.
            </video>
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

export default VideoPortfolio;

const Label = ({ children }) => {
  return (
    <label className={s.label}>
      <div className={s.rec}></div>
      <span>{children}</span>
    </label>
  );
};
