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

const Index = () => {
  return (
    <section className={s.wr}>
      <Wrapper>
        <h1 data-aos="fade-right">
          <img src={title} alt="творчество" />
        </h1>
        <div className={s.showreel}>
          <Video videoSrc={"showreel.mp4"} label={"Шоурил 2023"} />
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
                <Video videoSrc={"moretv.mp4"} label={"More.tv"} />
                <Caption
                  tags={[TAGS.olv, TAGS.digital]}
                  category={CATEGORIES.reclama}
                >
                  Ролик для&nbsp;промо-компании к&nbsp;выходу сериала "Регби"
                  на&nbsp;онлайн-платформе.
                </Caption>
              </div>
              <div>
                <Video videoSrc={"ulibka.mp4"} label={"Улыбка"} />
                <Caption>
                  Серия из&nbsp;трёх роликов для&nbsp;проведения рекламной
                  кампании.
                </Caption>
              </div>
            </div>
            <div className={cn(s.polemica, s.video_number)}>
              <div>
                <Video videoSrc={"polemica.mp4"} label={"polemica"} />
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
            <p data-aos="fade-up">
              Выстраиваем прозрачный и&nbsp;понятный процесс работы. Придумываем
              креатив и&nbsp;защищаем идеи, обосновываем траты, соблюдаем сметы
              и&nbsp;сроки.
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
            <Video videoSrc={"gayane.mp4"} label={"yandex/gayane"} />
            <Caption
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
            <p data-aos="fade-up">
              гарантируем удобный сервис и&nbsp;постоянную коммуникацию,
              утверждаем каждый этап проекта, ведём ежедневные отчёты.
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
                <span>Сергей Клейн</span>
                <span>Исполнительный продюсер</span>
              </figcaption>
            </figure>
          </Process>
        </div>
        <div className={cn(s.dom, s.video_number)}>
          <div>
            <Video videoSrc={"dom.mp4"} label={"там, где наш дом"} />
            <Caption
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
            <Video videoSrc={"ctrl.mp4"} label={"Ctrl + A / add"} />
            <Caption
              tags={[TAGS.tv.toUpperCase(), TAGS.olv.toUpperCase()]}
              category={"Музыкальный клип"}
            ></Caption>
          </div>
          <div>
            <Video videoSrc={"cg.mp4"} label={"шоурил cg"} />
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
