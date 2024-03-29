import Wrapper from "components/Wrapper";
import s from "./footer.module.scss";
import { CopyEmail } from "components/CopyEmail";
import Form from "components/Form/Form";
import SocialLink from "components/SocialLink";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";
import { LogoBox } from "components/LogoBox/LogoBox";
import SvgSelector from "components/SvgSelector";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";

const Footer = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <footer className={s.footer} id="project">
      <Wrapper>
        <div className={s.wrapper}>
          <nav className={s.head}>
            <div>
              <h3>обсудить проект</h3>
            </div>
            <div>
              <CopyEmail />
            </div>
            <div>
              <a
                href="https://t.me/dmitriy_kvashnin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>
                  <SvgSelector svg={"arrow"} />
                </span>
                Телеграм
              </a>
            </div>
          </nav>
          <div className={s.content}>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            >
              <Form />
            </div>
            <div className={s.authors}>
              <article
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <div>
                  <img
                    src={require("assets/author-1.png")}
                    alt="Дмитрий Квашнин"
                  />
                </div>
                <p>
                  Дмитрий Квашнин
                  <br />
                  <br />
                  Поможет разобраться в&nbsp;вашей задаче и&nbsp;предложит
                  решение.
                </p>
                <a
                  href="https://t.me/dmitriy_kvashnin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Телеграм
                </a>
              </article>
              <article
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <div>
                  <img
                    src={require("assets/author-2.png")}
                    alt="Сергей Клейн"
                  />
                </div>
                <p>
                  Сергей Клейн
                  <br />
                  <br />
                  Ответит на&nbsp;ваши вопросы и&nbsp;организует встречу.
                </p>
                <a
                  href="https://t.me/klein_sergey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Телеграм
                </a>
              </article>
            </div>
            <div className={s.policy}>
              <div
                data-aos={isMobile ? "" : "fade-left"}
                data-aos-duration="700"
              >
                <a
                  href={require("assets/documents/ПОЛИТИКА_ОБРАБОТКИ_ПЕРСОНАЛЬНЫХ_ДАННЫХ.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Политика обработки персональных данных
                </a>
              </div>
              <div className={s.social}>
                <LogoBox>
                  <div>
                    <SocialLink svg={"vimeo"}>
                      https://vimeo.com/sputnikfilmspro
                    </SocialLink>
                  </div>
                  <div>
                    <SocialLink svg={"vk"}>
                      https://vk.com/sputnikfilms
                    </SocialLink>
                  </div>
                  <div>
                    <SocialLink svg={"vcru"}>
                      https://vc.ru/u/1509727-sputnik-films
                    </SocialLink>
                  </div>
                </LogoBox>
              </div>
            </div>
          </div>
          <nav className={s.foot}>
            <div>
              <Link to="/">
                <img src={logo} alt="логотип" />
              </Link>
            </div>
            <div className={s.designed}>
              <a
                href="https://www.behance.net/artpavlushin"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMobile
                  ? "Задизайнили в артели"
                  : "Задизайнили в артели павлушина"}
              </a>
            </div>
            <div>
              <span>© Sputnik Films {new Date().getFullYear()}</span>
            </div>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
