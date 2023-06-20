import Wrapper from "components/Wrapper";
import s from "./about.module.scss";
import comanda from "assets/comanda.svg";
import SocialLink from "components/SocialLink";
import { styled } from "styled-components";
import { breakpoints } from "styles/variables";
import { nominations } from "constants/nominations";

const About = () => {
  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h1>
            <img src={comanda} alt="творчество" />
          </h1>
          <p>
            Победители и&nbsp;участники международных кинофестивалей, Фильмы
            представлены на&nbsp;крупнейших онлайн-платформах
          </p>
          <div className={s.links}>
            <ul>
              <SocialLink svg={"yandex"}>https://</SocialLink>
              <SocialLink svg={"yandex"}>https://</SocialLink>
              <SocialLink svg={"yandex"}>https://</SocialLink>
              <SocialLink svg={"yandex"}>https://</SocialLink>
            </ul>
          </div>
          <div className={s.authors}>
            <ul>
              <Author src={"author-1.png"} name={"Дмитрий Квашнин"}>
                Основатель агентства, режиссёр, сценарист, продюсер
              </Author>
              <Author src={"author-2.png"} name={"Сергей Клейн"}>
                Сооснователь и&nbsp;исполнительный продюсер
              </Author>
            </ul>
          </div>
        </header>
        <main>
          <h2>публикации и награды:</h2>
          <ul className={s.nagrady}>
            {[1, 2, 3, 4, 5].map((elem) => (
              <li key={elem}>
                <img
                  src={require(`assets/nomination-${elem}.png`)}
                  alt="Номинация"
                />
              </li>
            ))}
          </ul>
          <ul className={s.nominacyy}>
            {nominations.map((elem, i) => (
              <li key={i}>
                <a href={elem.url} target="_blank" rel="noopener noreferrer">
                  {elem.slug}
                </a>
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
            ))}
          </ul>
        </main>
      </Wrapper>
    </section>
  );
};

export default About;

const Author = ({ src, name, children }) => {
  return (
    <figure>
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

const ImageBox = styled.div`
    width: 124px;
    aspect-ratio: 1/1;
    position: relative;
    @media ${breakpoints.laptop} {
      width: 6vw;
    }
    & > div {
      position: relative;
      &:first-child {
        position: absolute;
        filter: blur(38px);
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
      }
    }
  }
  
`;
