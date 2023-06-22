import Wrapper from "components/Wrapper";
import s from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import { CopyEmail } from "components/CopyEmail";

const Header = () => {
  return (
    <header className={s.header}>
      <Wrapper>
        <div className={s.wrapper}>
          <div className={s.links}>
            <div data-aos="fade-right">
              <CopyEmail />
            </div>
            <div data-aos="fade-down">
              <Link to="/">
                <img src={logo} alt="логотип" />
              </Link>
            </div>
            <div data-aos="fade-left">
              <a href="#project">
                <span>&#129138;</span>Обсудить проект
              </a>
            </div>
          </div>
          <nav className={s.navigation}>
            <Link to="/">Главная</Link>
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/about">О нас</Link>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
