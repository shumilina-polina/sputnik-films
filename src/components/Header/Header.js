import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <nav className={s.links}></nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
