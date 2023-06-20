import s from "./logoBox.module.scss";

export const LogoBox = ({ children }) => {
  return <ul className={s.box}>{children}</ul>;
};
