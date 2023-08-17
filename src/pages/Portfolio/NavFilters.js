import s from "./portfolio.module.scss";
import { useEffect, useState } from "react";
import { CATEGORIES, TAGS } from "constants/filters";
import { videoList } from "constants/videoList";
import cn from "classnames";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";

export const NavFilters = ({
  setList,
  setFiltersMobileOpen = () => {},
  getNewCategory = () => {},
}) => {
  const [category, setCategory] = useState(CATEGORIES.all);
  const [tags, setTags] = useState([]);
  const isMobile = useMediaQuery(breakpoints.mobile);

  const handleTag = (item) => {
    tags.includes(TAGS[item])
      ? setTags(tags.filter((tag) => tag !== TAGS[item]))
      : setTags([...tags, TAGS[item]]);
  };

  const rerenderList = () => {
    if (category !== CATEGORIES.all) {
      setList(
        videoList.filter(
          (video) =>
            video.category === category &&
            tags.every((item) => video.tags.includes(item))
        )
      );
    } else {
      setList(
        videoList.filter((video) =>
          tags.every((item) => video.tags.includes(item))
        )
      );
    }
  };

  useEffect(() => {
    if (category === CATEGORIES.all && tags.length === 0) {
      setList(videoList);
    } else {
      rerenderList();
    }
  }, [category, tags]);

  return (
    <nav className={s.nav}>
      <div className={s.filter}>
        <div className={s.filter_categories}>
          <h2>Категории:</h2>
          <ul>
            {Object.keys(CATEGORIES).map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setCategory(CATEGORIES[item]);
                    getNewCategory(CATEGORIES[item]);
                  }}
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
                  onClick={() => {
                    handleTag(item);
                  }}
                  className={tags.includes(TAGS[item]) ? s.tag_active : ""}
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
                setList(videoList);
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
              setList(videoList);
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
