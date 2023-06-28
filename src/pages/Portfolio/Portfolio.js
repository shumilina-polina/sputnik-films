import Wrapper from "components/Wrapper";
import s from "./portfolio.module.scss";
import { CATEGORIES, TAGS } from "constants/filters";
import cn from "classnames";
import useSticky from "components/useSticky";

const Portfolio = () => {
  const { sticky, stickyBottom, stickyRef } = useSticky();
  return (
    <Wrapper>
      <section className={s.wr}>
        <nav
          ref={stickyRef}
          className={cn(
            s.nav,
            s.flex,
            sticky ? s.sticky : "",
            stickyBottom ? s.sticky_bottom : ""
          )}
        >
          <div className={s.filter}>
            <div className={s.filter_categories}>
              <h2>Категории:</h2>
              <ul>
                {Object.keys(CATEGORIES).map((item, i) => (
                  <li key={i}>
                    <button className="button">{CATEGORIES[item]}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.filter_tags}>
              <h2>Теги:</h2>
              <ul>
                {Object.keys(TAGS).map((item, i) => (
                  <li key={i}>
                    <button>#{TAGS[item]}</button>
                  </li>
                ))}
              </ul>
            </div>
            <button className={cn(s.filter_button, "button")}>
              Сбросить фильтры
            </button>
          </div>
        </nav>
        {sticky && (
          <div
            style={{
              height: `${stickyRef.current?.clientHeight}px`,
            }}
          />
        )}

        <div className={s.video}>
          <h1></h1>
          <ul></ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Portfolio;
