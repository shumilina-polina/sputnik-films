import Wrapper from "components/Wrapper";
import s from "./index.module.scss";
import title from "assets/title.svg";
import n72 from "assets/72.svg";
import n84 from "assets/84.svg";
import projects from "assets/projects.svg";
import Video from "components/Video/Video";
import Caption from "components/Video/Caption";
import { CATEGORIES, TAGS } from "constants/filters";
import Process from "components/Process";
import cn from "classnames";
import SocialLink from "components/SocialLink";
import TypeIt from "typeit-react";

const Index = () => {
  return (
    <section className={s.wr}>
      <Wrapper>
        <h1>
          <img src={title} alt="творчество" />
        </h1>
        <div className={s.showreel}>
          <Video fade="up" videoSrc={"showreel"} label={"Шоурил 2023"} />
        </div>
        {/* TABS */}
        <section className={s.projects}>
          <header data-aos="fade-left">
            <h2>
              <img src={projects} alt="Проекты" />
            </h2>
          </header>
          <main>
            <div className={s.videos}>
              <div>
                <Video fade="right" videoSrc={"moretv"} label={"More.tv"} />
                <Caption
                  tags={[TAGS.olv, TAGS.digital]}
                  category={CATEGORIES.reclama}
                  fade="right"
                >
                  Ролик для&nbsp;промо-компании к&nbsp;выходу сериала "Регби"
                  на&nbsp;онлайн-платформе.
                </Caption>
              </div>
              <div>
                <Video videoSrc={"ulibka"} label={"Улыбка"} />
                <Caption>
                  Серия из&nbsp;трёх роликов для&nbsp;проведения рекламной
                  кампании.
                </Caption>
              </div>
            </div>
            <div className={cn(s.polemica, s.video_number)}>
              <div>
                <Video videoSrc={"polemica"} label={"polemica"} />
                <Caption
                  tags={[TAGS.olv, TAGS.digital]}
                  category={CATEGORIES.reclama}
                >
                  Помогли запустить широкую промо-компанию с&nbsp;помощью видео.
                </Caption>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <div>
                  <img src={n72} alt="72" />
                </div>
                <span>Часа от&nbsp;брифа до&nbsp;результата</span>
              </div>
            </div>
          </main>
        </section>
        <div className={s.process}>
          <Process>
            <span>(процесс)</span>
            {/* <p>
              Выстраиваем прозрачный и&nbsp;понятный процесс работы. Придумываем
              креатив и&nbsp;защищаем идеи, обосновываем траты, соблюдаем сметы
              и&nbsp;сроки.
            </p> */}
            <p>
              Выстраиваем прозрачный и&nbsp;понятный процесс работы. Придумываем
              креатив и&nbsp;защищаем идеи, обосновываем траты, собл
              <TypeIt
                options={{
                  speed: 60,
                  waitUntilVisible: true,
                }}
              >
                юдаем сметы и&nbsp;сроки.
              </TypeIt>
            </p>
            <figure>
              <div>
                <div>
                  <img
                    src={require(`assets/author-1.png`)}
                    alt="Дмитрий Квашнин"
                  />
                </div>
                <div>
                  <img
                    src={require(`assets/author-1.png`)}
                    alt="Дмитрий Квашнин"
                  />
                </div>
              </div>
              <figcaption>
                <span>Дмитрий Квашнин</span>
                <span>Основатель студии</span>
              </figcaption>
            </figure>
          </Process>
        </div>
        <div className={cn(s.gayane, s.video_number)}>
          <div>
            <Video fade="right" videoSrc={"gayane"} label={"yandex/gayane"} />
            <Caption
              fade="right"
              tags={["branded", "content"]}
              category={CATEGORIES.reclama}
            >
              <p>Съёмки проходили в&nbsp;2-х городах.</p>
              <p>1&nbsp;месяц ушёл на&nbsp;производство.</p>
            </Caption>
          </div>
          <div>
            <SocialLink svg={"yandex"}>https://</SocialLink>
            <p>
              Ролик для&nbsp;повышения уровня лояльности пользователей Яндекс.GO
              и&nbsp;проведения HR-компании.
            </p>
          </div>
        </div>
        <div className={s.process}>
          <Process>
            <span>(контроль)</span>
            <p>
              гарантируем удобный сервис и&nbsp;постоянную коммуникацию,
              утверждаем каждый этап проекта,{" "}
              <TypeIt
                options={{
                  speed: 60,
                  waitUntilVisible: true,
                }}
              >
                ведём ежедневные отчёты.
              </TypeIt>
            </p>
            <figure>
              <div>
                <div>
                  <img
                    src={require(`assets/author-2.png`)}
                    alt="Сергей Клейн"
                  />
                </div>
                <div>
                  <img
                    src={require(`assets/author-2.png`)}
                    alt="Сергей Клейн"
                  />
                </div>
              </div>
              <figcaption>
                =09876543
                <span>Сергей Клейн</span>
                <span>Исполнительный продюсер</span>
              </figcaption>
            </figure>
          </Process>
        </div>
        <div className={cn(s.dom, s.video_number)}>
          <div>
            <Video fade="right" videoSrc={"dom"} label={"там, где наш дом"} />
            <Caption
              fade="right"
              tags={[TAGS.almanah, "кино"]}
              category={CATEGORIES.docKino}
            >
              <p>
                Дебютный документальный проект, ставший победителем
                международных фестивалей.
              </p>
              <p>Кинотеатральный прокат в&nbsp;54 городах СНГ.</p>
            </Caption>
          </div>
          <div data-aos="fade-up">
            <div>
              <img src={n84} alt="8.4" />
            </div>
            <span>Средняя оценка фильма на&nbsp;Кинопоиске.</span>
          </div>
        </div>
        <div className={cn(s.videos, s.videos_last)}>
          <div>
            <Video fade="right" videoSrc={"ctrl"} label={"Ctrl + A / add"} />
            <Caption
              fade="right"
              tags={[TAGS.tv.toUpperCase(), TAGS.olv.toUpperCase()]}
              category={"Музыкальный клип"}
            ></Caption>
          </div>
          <div>
            <Video videoSrc={"cg"} label={"шоурил cg"} />
            <Caption
              tags={[TAGS.tv.toUpperCase(), TAGS.olv.toUpperCase()]}
              category={"Графика и постпродакшн"}
            >
              5 лет развиваем направление
            </Caption>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Index;
