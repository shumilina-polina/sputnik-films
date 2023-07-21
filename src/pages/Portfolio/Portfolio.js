import Wrapper from "components/Wrapper";
import s from "./portfolio.module.scss";
import { CATEGORIES, TAGS } from "constants/filters";
import cn from "classnames";
import raboty from "assets/raboty.svg";
import { useEffect, useState } from "react";
import { videoList } from "constants/videoList";
import Video from "components/Video/Video";
import { breakpoints } from "styles/variables";
import { Box, Drawer, List, ListItem, useMediaQuery } from "@mui/material";
import SvgSelector from "components/SvgSelector";

const Portfolio = () => {
  const [list, setList] = useState(videoList);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState(CATEGORIES.all);
  const isMobile = useMediaQuery(breakpoints.mobile);

  const [filtersMobileOpen, setFiltersMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category === CATEGORIES.all)
      setList(
        videoList.filter((video) =>
          tags.every((item) => video.tags.includes(item))
        )
      );
    else {
      setList(
        videoList.filter(
          (video) =>
            video.category === category &&
            tags.every((item) => video.tags.includes(item))
        )
      );
    }
  }, [tags, category]);

  return (
    <Wrapper>
      <section className={s.wr}>
        {isMobile ? (
          <Drawer
            className={s.filters_mobile}
            anchor={"top"}
            open={filtersMobileOpen}
          >
            <header>
              <button onClick={() => setFiltersMobileOpen(false)}>
                <SvgSelector svg={"close"} />
              </button>
            </header>
            <NavFilters
              setFiltersMobileOpen={setFiltersMobileOpen}
              setCategory={setCategory}
              category={category}
              tags={tags}
              setTags={setTags}
            />
          </Drawer>
        ) : (
          <NavFilters
            setCategory={setCategory}
            category={category}
            tags={tags}
            setTags={setTags}
          />
        )}

        <div className={s.video}>
          <h1>
            <img src={raboty} alt="творчество" />
          </h1>
          {isMobile && (
            <button
              onClick={() => setFiltersMobileOpen(true)}
              className={cn(s.button_mobile, "button")}
            >
              {category === CATEGORIES.all ? "ПО КАТЕГОРИЯМ" : category}
            </button>
          )}
          <VideoGrid list={list} />
        </div>
      </section>
    </Wrapper>
  );
};

const NavFilters = ({
  setCategory,
  category,
  tags,
  setTags,
  setFiltersMobileOpen = () => {},
}) => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  const handleTag = (item) => {
    tags.includes(TAGS[item])
      ? setTags(tags.filter((tag) => tag !== TAGS[item]))
      : setTags([...tags, TAGS[item]]);
  };
  return (
    <nav className={s.nav}>
      <div className={s.filter}>
        <div className={s.filter_categories}>
          <h2>Категории:</h2>
          <ul>
            {Object.keys(CATEGORIES).map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => setCategory(CATEGORIES[item])}
                  className={cn(
                    "button",
                    category === CATEGORIES[item] ? s.category_active : ""
                  )}
                  disabled={category === CATEGORIES[item]}
                >
                  {CATEGORIES[item]}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.filter_tags}>
          <h2>Теги:</h2>
          <ul>
            {Object.keys(TAGS).map((item, i) => (
              <li key={i}>
                <button
                  className={tags.includes(TAGS[item]) ? s.tag_active : ""}
                  disabled={category === CATEGORIES[item]}
                  onClick={() => handleTag(item)}
                >
                  #{TAGS[item]}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {isMobile ? (
          <>
            <button
              onClick={() => setFiltersMobileOpen(false)}
              className={cn(s.filter_button, "button")}
            >
              Показать работы
            </button>
            <button
              onClick={() => {
                setCategory(CATEGORIES.all);
                setTags([]);
              }}
              disabled={category === CATEGORIES.all && tags.length === 0}
              className={s.reset_button}
            >
              сбросить
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setCategory(CATEGORIES.all);
              setTags([]);
            }}
            disabled={category === CATEGORIES.all && tags.length === 0}
            className={cn(s.filter_button, "button")}
          >
            Сбросить фильтры
          </button>
        )}
      </div>
    </nav>
  );
};

const VideoGrid = ({ list }) => {
  const checkLength = () => {
    if (list.length < 3) return 2;
    else if (list.length === 4) return 4;
    else if (list.length % 3 === 1) return "last_big";
    else return "";
  };

  return (
    <>
      {list.length === 0 && <p>Не найдено</p>}
      <ul className={cn(s.list, s[`list_${checkLength()}`])}>
        {list.map((video, i) => (
          <li data-aos="fade-up" key={i}>
            <Video
              route="port"
              videoSrc={video.localUrl}
              videoUrl={video.vimeoUrl}
              label={video.label}
              poster={video.poster}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Portfolio;
