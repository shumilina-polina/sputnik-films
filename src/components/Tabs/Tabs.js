import s from "./tabs.module.scss";
import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import { LogoBox } from "components/LogoBox/LogoBox";
import SocialLink from "components/SocialLink";
import { CATEGORIES, TAGS } from "constants/filters";
import { tab1, tab2, tab3, tab4, tab5, tab6 } from "constants/tabText";
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { breakpoints } from "styles/variables";

const tabs = [
  CATEGORIES.reclama,
  // CATEGORIES.docReclama,
  "Корпоративное видео",
  "Регулярный контент",
  "Документальные фильмы",
  "Графика и постпродакшн",
  CATEGORIES.clip,
];

const TabPanel = ({ children, value, index }) => (
  <div
    className={s.tab_panel}
    role="tabpanel"
    hidden={value !== index}
    id={`horizontal-tabpanel-${index}`}
    aria-labelledby={`horizontal-tab-${index}`}
  >
    {value === index && <div>{children}</div>}
  </div>
);

const a11yProps = (index) => {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
};

export const HorizontalTabs = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={s.tab_box}>
      <Tabs
        selectionFollowsFocus
        variant={isMobile ? "scrollable" : "standard"}
        className={classNames(s.tabs, "tabs")}
        orientation={"horizontal"}
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        {tabs.map((label, i) => (
          <Tab key={i} className={s.tab} label={label} {...a11yProps(i - 1)} />
        ))}
      </Tabs>
      {[Tab1, Tab3, Tab4, Tab5, Tab6, Tab7].map((TabComponent, i) => (
        <TabPanel value={value} key={i} index={i}>
          <Content>
            <TabComponent />
          </Content>
        </TabPanel>
      ))}
    </Box>
  );
};

const Content = ({ children }) => <div className={s.content}>{children}</div>;

const Tab1 = () => {
  const [text, setText] = useState(tab1.init);
  return (
    <>
      <div className={s.left}>
        <p>
          Создадим видеоролик для&nbsp;целей ваших рекламных
          и&nbsp;маркетинговых кампаний, Сами разработаем креатив.
        </p>
        <ul>
          {["tv", "olv", TAGS.digital].map((tag, i) => (
            <li key={i}>#{tag}</li>
          ))}
        </ul>
      </div>
      <div className={s.right}>
        <ReactMarkdown>{text}</ReactMarkdown>
        <div onMouseLeave={() => setText(tab1.init)}>
          <LogoBox>
            {["more", "sushi", "polemica", "skuratov", "sber"].map((svg, i) => (
              <div key={i} onMouseOver={() => setText(tab1[`text_${i + 1}`])}>
                <SocialLink svg={svg} />
              </div>
            ))}
          </LogoBox>
        </div>
      </div>
    </>
  );
};

const Tab2 = () => {
  const [text, setText] = useState(tab2.init);

  return (
    <>
      <div className={s.left}>
        <p>РАССКАЗЫВАЕМ НАСТОЯЩИЕ ИСТОРИИ О&nbsp;ЛЮДЯХ И&nbsp;БРЕНДАХ.</p>
        <ul>
          {["tv", "olv", TAGS.digital].map((tag, i) => (
            <li key={i}>#{tag}</li>
          ))}
        </ul>
      </div>
      <div className={s.right}>
        <ReactMarkdown>{text}</ReactMarkdown>
        <div onMouseLeave={() => setText(tab2.init)}>
          <LogoBox>
            {["yandex", "mega"].map((svg, i) => (
              <div key={i} onMouseOver={() => setText(tab2[`text_${i + 1}`])}>
                <SocialLink svg={svg} />
              </div>
            ))}
          </LogoBox>
        </div>
      </div>
    </>
  );
};
const Tab3 = () => {
  const [text, setText] = useState(tab3.init);
  return (
    <>
      <div className={s.left}>
        <p>
          ПРЕЗЕНТАЦИЯ КОМПАНИИ, УСЛУГИ И&nbsp;ПРОДУКТА НА&nbsp;ЯЗЫКЕ ФАКТОВ.
        </p>
        <ul>
          {["фильмы", "презентации", "визитки", "hr-ролики", "эксплейнеры"].map(
            (tag, i) => (
              <li key={i}>#{tag}</li>
            )
          )}
        </ul>
      </div>
      <div className={s.right}>
        <ReactMarkdown>{text}</ReactMarkdown>
        <div onMouseLeave={() => setText(tab3.init)}>
          <LogoBox>
            {["sl", "em", "pt"].map((svg, i) => (
              <div key={i} onMouseOver={() => setText(tab3[`text_${i + 1}`])}>
                <SocialLink svg={svg} />
              </div>
            ))}
          </LogoBox>
        </div>
      </div>
    </>
  );
};

const Tab4 = () => {
  const [text, setText] = useState(tab4.init);
  return (
    <>
      <div className={s.left}>
        <p>Создаем видео и фото “под ключ” для ваших социальных сетей.</p>
        <ul>
          {[TAGS.aero, "экстрим"].map((tag, i) => (
            <li key={i}>#{tag}</li>
          ))}
        </ul>
      </div>
      <div className={s.right}>
        <ReactMarkdown>{text}</ReactMarkdown>
        <div onMouseLeave={() => setText(tab4.init)}>
          <LogoBox>
            {["ciay", "asber", "vokzal"].map((svg, i) => (
              <div key={i} onMouseOver={() => setText(tab4[`text_${i + 1}`])}>
                <SocialLink svg={svg} />
              </div>
            ))}
          </LogoBox>
        </div>
      </div>
    </>
  );
};

const Tab5 = () => {
  const [text, setText] = useState(tab5.init);
  return (
    <>
      <div className={s.left}>
        <p>
          СОЗДАЕМ ФИЛЬМЫ И&nbsp;СЕРИАЛЫ, КОТОРЫЕ ВЫХОДЯТ В&nbsp;ПРОКАТ
          И&nbsp;НА&nbsp;ОНЛАЙН-ПЛАТФОРМАХ.
        </p>
        <ul>
          {["фильмы", "веб-сериалы", "альманахи", "шоу"].map((tag, i) => (
            <li key={i}>#{tag}</li>
          ))}
        </ul>
      </div>
      <div className={s.right}>
        <ReactMarkdown>{text}</ReactMarkdown>
        <div onMouseLeave={() => setText(tab5.init)}>
          <LogoBox>
            {["kinopoisk", "okko", "wink", "tvigle"].map((svg, i) => (
              <div key={i} onMouseOver={() => setText(tab5[`text_${i + 1}`])}>
                <SocialLink svg={svg} />
              </div>
            ))}
          </LogoBox>
        </div>
      </div>
    </>
  );
};
const Tab6 = () => {
  const [text, setText] = useState(tab6.init);

  return (
    <>
      <div className={s.left}>
        <p>
          ДЕЛАЕМ 2D И&nbsp;3D-ГРАФИКУ, МУЛЬТИПЛИКАЦИЮ И&nbsp;VFX. МОНТАЖ,
          ЦЕТОКОРРЕКЦИЯ И&nbsp;САУНД-ДИЗАЙН.
        </p>
        <ul>
          {[TAGS.CG, TAGS.threeD, "VFX", "NFT"].map((tag, i) => (
            <li key={i}>#{tag}</li>
          ))}
        </ul>
      </div>
      <div className={s.right}>
        <ReactMarkdown>{text}</ReactMarkdown>
        <div onMouseLeave={() => setText(tab6.init)}>
          <LogoBox>
            {["vtb", "rizolin", "urgant", "mega", "them"].map((svg, i) => (
              <div key={i} onMouseOver={() => setText(tab6[`text_${i + 1}`])}>
                <SocialLink svg={svg} />
              </div>
            ))}
          </LogoBox>
        </div>
      </div>
    </>
  );
};
const Tab7 = () => (
  <>
    <div className={s.left}>
      <p>
        Сотрудничаем с&nbsp;лейблами и&nbsp;независимыми артистами. Сочетаем
        сторителлинг с&nbsp;артом и&nbsp;образностью.
      </p>
      <ul>
        {["cниппеты", "лайвы", "промо"].map((tag, i) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
    </div>
    <div className={s.right}>
      <p>Работаем комплексно: создаем клипы, обложки, бэкстейдж.</p>
    </div>
  </>
);
