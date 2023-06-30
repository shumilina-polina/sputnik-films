import { Dialog, DialogContent, Zoom } from "@mui/material";
import { useEffect } from "react";

const Modal = ({ open, setOpen, children, className = "" }) => {
  // useEffect(() => {
  //   window.document
  //     .getElementsByTagName("html")[0]
  //     .setAttribute("style", open ? "overflow: hidden" : "");
  // }, [open]);
  return (
    <Dialog
      TransitionComponent={Zoom}
      className={`dialog ${className}`}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      {/* <button onClick={() => setOpen(false)}>
        <SvgSelector svg={"close"} />
      </button> */}
      <DialogContent style={{ padding: 0 }}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
