import Wrapper from "components/Wrapper";
import s from "./portfolio.module.scss";
import { CATEGORIES, TAGS } from "constants/filters";
import cn from "classnames";
import raboty from "assets/raboty.svg";
import rabotyMobile from "assets/rabotyMobile.svg";
import { useEffect, useState } from "react";
import { videoList } from "constants/videoList";
import Video from "components/Video/Video";
import { breakpoints } from "styles/variables";
import { Drawer, useMediaQuery } from "@mui/material";
import SvgSelector from "components/SvgSelector";
import VideoPortfolio from "components/VideoPortfolio/VideoPortfolio";
import { NavFilters } from "./NavFilters";

const Portfolio = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);
  const [mobileCategory, setMobileCategory] = useState(CATEGORIES.all);
  const [list, setList] = useState(
    isMobile ? videoList : videoList.slice(0, 3)
  );
  const [filtersMobileOpen, setFiltersMobileOpen] = useState(false);

  const getNewCategory = (newCategory) => {
    setMobileCategory(newCategory)
  };

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
              getNewCategory={getNewCategory}
              setList={setList}
              list={list}
              setFiltersMobileOpen={setFiltersMobileOpen}
            />
          </Drawer>
        ) : (
          <NavFilters setList={setList} list={list} />
        )}

        <div className={s.video}>
          <h1>
            <img src={isMobile ? rabotyMobile : raboty} alt="Работы" />
          </h1>
          {isMobile && (
            <button
              onClick={() => setFiltersMobileOpen(true)}
              className={cn(s.button_mobile, "button")}
            >
              {mobileCategory === CATEGORIES.all
                ? "ПО КАТЕГОРИЯМ"
                : mobileCategory}
            </button>
          )}
          <VideoGrid list={list} />
        </div>
      </section>
    </Wrapper>
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
          <li data-aos="fade-up" data-aos-offset="0" key={i}>
            <VideoPortfolio
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
