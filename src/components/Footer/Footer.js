import Wrapper from "components/Wrapper";
import s from "./footer.module.scss";
import { CopyEmail } from "components/CopyEmail";
import Form from "components/Form/Form";
import SocialLink from "components/SocialLink";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";
import { LogoBox } from "components/LogoBox/LogoBox";
import SvgSelector from "components/SvgSelector";

const Footer = () => {
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
                href="https://t.me/cosmovisioner"
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
            <div>
              <Form />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="500"
              className={s.authors}
            >
              <article>
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
                  Ответит на&nbsp;ваши вопросы и&nbsp;организует встречу.
                </p>
                <a
                  href="https://t.me/cosmovisioner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Телеграм
                </a>
              </article>
              <article>
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
                  Поможет разобраться в&nbsp;вашей задаче и&nbsp;предложит
                  решение.
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
            <div
              data-aos="fade-left"
              data-aos-offset="500"
              className={s.policy}
            >
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Политика обработки персональных данных
              </a>
              <div className={s.social}>
                <LogoBox>
                  <SocialLink svg={"yandex"}>https://hello</SocialLink>
                  <SocialLink svg={"yandex"}>https://hello</SocialLink>
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
                href="https://www.behance.net/pavlushin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Задизайнили в артели павлушина
              </a>
            </div>
            <div>
              <span>© Sputnik Films 2023</span>
            </div>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
