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
import { HorizontalTabs } from "components/Tabs/Tabs";

const Index = () => {
  return (
    <section className={s.wr}>
      <Wrapper>
        <h1>
          <img src={title} alt="творчество" />
        </h1>
        <div
          className={s.showreel}
          data-aos={`fade-up`}
          data-aos-duration="1000"
        >
          <Video
            videoSrc={"showreel"}
            videoUrl={"https://player.vimeo.com/video/687465086?h=100169ac7e"}
            label={"Шоурил 2023"}
            poster={"showreel-poster.png"}
          />
        </div>
        <HorizontalTabs />
        <section className={s.projects}>
          <header data-aos="fade-left">
            <h2>
              <img src={projects} alt="Проекты" />
            </h2>
          </header>
          <main>
            <div className={s.videos}>
              <div>
                <div
                  data-aos={`fade-right`}
                  data-aos-duration="1000"
                  data-aos-offset="500"
                >
                  <Video
                    videoSrc={"moretv"}
                    videoUrl="https://player.vimeo.com/video/794151930?h=d6d0e713f5"
                    label={"More.tv"}
                    poster={"moretv-poster.png"}
                  />
                </div>
                <Caption
                  tags={['olv', TAGS.digital]}
                  category={CATEGORIES.reclama}
                  fade="right"
                >
                  Ролик для&nbsp;промо-компании к&nbsp;выходу сериала "Регби"
                  на&nbsp;онлайн-платформе.
                </Caption>
              </div>
              <div>
                <div
                  data-aos={`fade-left`}
                  data-aos-duration="1000"
                  data-aos-offset="500"
                >
                  <Video
                    videoSrc={"ulibka"}
                    videoUrl="https://player.vimeo.com/video/788918319?h=ce8a5dc86e"
                    label={"Улыбка"}
                    poster={"ulibka-poster.png"}
                  />
                </div>
                <Caption>
                  Серия из&nbsp;трёх роликов для&nbsp;проведения рекламной
                  кампании.
                </Caption>
              </div>
            </div>
            <div className={cn(s.polemica, s.video_number)}>
              <div>
                <div
                  data-aos={`fade-left`}
                  data-aos-duration="1000"
                  data-aos-offset="500"
                >
                  <Video
                    videoSrc={"polemica"}
                    videoUrl="https://player.vimeo.com/video/787493399?h=677c053041"
                    label={"polemica"}
                    poster={"polemica-poster.png"}
                  />
                </div>
                <Caption
                  tags={['olv', TAGS.digital]}
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
            <div
              data-aos={`fade-right`}
              data-aos-duration="1000"
              data-aos-offset="500"
            >
              <Video
                videoSrc={"gayane"}
                videoUrl="https://player.vimeo.com/video/787493279?h=8689c9f2e4"
                label={"yandex/gayane"}
                poster={"gayane-poster.png"}
              />
            </div>
            <Caption
              fade="right"
              tags={["branded", "content"]}
              category={CATEGORIES.docReclama}
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
                <span>Сергей Клейн</span>
                <span>Исполнительный продюсер</span>
              </figcaption>
            </figure>
          </Process>
        </div>
        <div className={cn(s.dom, s.video_number)}>
          <div>
            <div
              data-aos={`fade-right`}
              data-aos-duration="1000"
              data-aos-offset="500"
            >
              <Video
                videoSrc={"dom"}
                videoUrl="https://player.vimeo.com/video/759499744?h=55e5aefc8d"
                label={"там, где наш дом"}
                poster={"dom-poster.png"}
              />
            </div>
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
            <div
              data-aos={`fade-right`}
              data-aos-duration="1000"
              data-aos-offset="500"
            >
              <Video
                videoSrc={"ctrl"}
                videoUrl="https://player.vimeo.com/video/788917724?h=8cb68bdf9b"
                label={"Ctrl + A / add"}
                poster={"ctrl-poster.png"}
              />
            </div>
            <Caption
              fade="right"
              tags={[TAGS.tv, TAGS.olv]}
              category={"Музыкальный клип"}
            ></Caption>
          </div>
          <div>
            <div
              data-aos={`fade-left`}
              data-aos-duration="1000"
              data-aos-offset="500"
            >
              <Video
                videoSrc={"cg"}
                videoUrl="https://player.vimeo.com/video/788918951?h=7d993bb16e"
                label={"шоурил cg"}
                poster={"cg-poster.png"}
              />
            </div>
            <Caption
              tags={[TAGS.tv, TAGS.olv]}
              category={"Графика_и_постпродакшн"}
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
