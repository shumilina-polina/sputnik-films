import Wrapper from "components/Wrapper";
import s from "./about.module.scss";
import comanda from "assets/comanda.svg";
import SocialLink from "components/SocialLink";
import { styled } from "styled-components";
import { breakpoints } from "styles/variables";
import { nominations } from "constants/nominations";
import { useState } from "react";
import BackSlider from "components/BackSlider/BackSlider";
import { LogoBox } from "components/LogoBox/LogoBox";

const nagrady = [
  "https://vk.com/unknownfilmfestival?w=wall-133062901_946",
  "https://vk.com/tamgdenashdom?w=wall-211402154_176",
  "https://moscowshorts.com/ru/programma-pokaza-filmov-pobediteley-moscow-shorts-sentyabr-2022/",
  "https://shortshotfest.com/",
  "https://lampa.film/fest/perm2022/schedule/festivalnyy-pokaz-tam-gde-nash-dom/",
];

const About = () => {
  const [nomList, setNomList] = useState(nominations.slice(0, 5));
  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h1>
            <img src={comanda} alt="творчество" />
          </h1>
          <p data-aos="fade-up">
            Победители и&nbsp;участники международных кинофестивалей, Фильмы
            представлены на&nbsp;крупнейших онлайн-платформах
          </p>
          <div className={s.links}>
            <LogoBox>
              <div>
                <SocialLink svg={"kinopoisk"}>
                  https://www.kinopoisk.ru/film/5232612/
                </SocialLink>
              </div>
              <div>
                <SocialLink svg={"okko"}>
                  https://okko.tv/serial/vy-iz-budushchego/season/2
                </SocialLink>
              </div>
              <div>
                <SocialLink svg={"wink"}>
                  https://wink.ru/movies/tam-gde-nash-dom--year-2022
                </SocialLink>
              </div>
              <div>
                <SocialLink svg={"tvigle"}>
                  https://www.tvigle.ru/video/tam-gde-nash-dom/
                </SocialLink>
              </div>
            </LogoBox>
          </div>
          <div className={s.authors}>
            <ul>
              <Author src={"author-1.png"} name={"Дмитрий Квашнин"}>
                Основатель агентства, режиссёр, сценарист, продюсер
              </Author>
              <Author src={"author-2.png"} name={"Сергей Клейн"}>
                Сооснователь и&nbsp;исполнительный продюсер
              </Author>
              <Author src={"author-3.png"} name={"Ксения Яковлева"}>
                Аккаунт <br /> менеджер
              </Author>
            </ul>
          </div>
        </header>
        <main>
          <h2>публикации и награды:</h2>
          <ul className={s.nagrady}>
            {nagrady.map((elem, i) => (
              <li key={i} data-aos="fade-left" data-aos-delay={(i + 1) * 100}>
                <a href={elem} target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`assets/nomination-${i + 1}.png`)}
                    alt="Номинация"
                  />
                </a>
              </li>
            ))}
          </ul>
          <ul className={s.nominacyy}>
            {nomList.map((elem, i) => (
              <a
                key={i}
                href={elem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div data-aos="fade-up" data-aos-delay={i * 50}>
                  <li>
                    <span>{elem.slug}</span>
                    <p>{elem.text}</p>
                    <ImageBox>
                      <div>
                        <img
                          src={require(`assets/${elem.imageSrc}`)}
                          alt="Номинация"
                        />
                      </div>
                      <div>
                        <img
                          src={require(`assets/${elem.imageSrc}`)}
                          alt="Номинация"
                        />
                      </div>
                    </ImageBox>
                  </li>
                </div>
              </a>
            ))}
          </ul>
          <button
            onClick={(e) => {
              setNomList(nominations);
              e.target.disabled = true;
            }}
          >
            показать еще
          </button>
        </main>
        <footer>
          <h2>Бэкстейдж:</h2>
          <BackSlider />
        </footer>
      </Wrapper>
    </section>
  );
};

export default About;

const Author = ({ src, name, children }) => {
  return (
    <figure data-aos="fade-up">
      <ImageBox>
        <div>
          <img src={require(`assets/${src}`)} alt={name} />
        </div>
        <div>
          <img src={require(`assets/${src}`)} alt={name} />
        </div>
      </ImageBox>
      <figcaption>
        <span>{name}</span>
        <span>{children}</span>
      </figcaption>
    </figure>
  );
};

export const ImageBox = styled.div`
    width: 124px;
    aspect-ratio: 1/1;
    position: relative;
    @media ${breakpoints.laptop} {
      width: 9vw;
    }
    & > div {
      position: relative;
      &:first-child {
        position: absolute;
        filter: blur(20px);
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
      }
    }
  }
  
`;
