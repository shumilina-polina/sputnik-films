import Wrapper from "components/Wrapper";
import s from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import SvgSelector from "components/SvgSelector";
import { useScroll } from "react-spring";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";

const social = [
  { id: 0, url: "https://t.me/dmitriy_kvashnin", svg: "tg" },
  { id: 1, url: "https://wa.me/79136898769", svg: "wp" },
  { id: 2, url: "mailto:hello@sputnikfilms.ru", svg: "mail" },
];

const Header = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);
  const [scrollVal, setScrollVal] = useState(0);
  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      isMobile && setScrollVal(scrollYProgress + 1);
    },
  });
  return (
    <header className={s.header}>
      <Wrapper>
        <div className={s.wrapper}>
          <div className={s.links}>
            {!isMobile && (
              <nav className={s.social} data-aos="fade-right">
                <span>Написать</span>
                {social.map((link) => (
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <SvgSelector svg={`header-${link.svg}`} />
                  </a>
                ))}
              </nav>
            )}

            <div className={s.logo} data-aos="fade-down">
              <Link to="/">
                <img src={logo} alt="логотип" />
              </Link>
            </div>
            <div
              className={s.talk}
              data-aos="fade-left"
              style={{
                opacity:
                  scrollVal > 1.8
                    ? // scrollVal > document.body.offsetHeight - 751
                      "0"
                    : "1",
              }}
            >
              <a href="#project">
                <span>
                  <SvgSelector svg={"arrow"} />
                </span>
                Обсудить проект
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
