import s from "./tabs.module.scss";
import { Box, Tab, Tabs } from "@mui/material";
import classNames from "classnames";
import { LogoBox } from "components/LogoBox/LogoBox";
import SocialLink from "components/SocialLink";
import { CATEGORIES, TAGS } from "constants/filters";
import { useState } from "react";

const tabs = [
  CATEGORIES.reclama,
  CATEGORIES.docReclama,
  "Корпоративное_видео",
  CATEGORIES.FPV,
  "Документальные_фильмы",
  "Графика_и_постпродакшн",
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
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={s.tab_box}>
      <Tabs
        className={classNames(s.tabs, "tabs")}
        orientation={"horizontal"}
        value={value}
        onChange={handleChange}
      >
        {tabs.map((label, i) => (
          <Tab key={i} className={s.tab} label={label} {...a11yProps(i - 1)} />
        ))}
      </Tabs>
      {[Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7].map((TabComponent, i) => (
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

const Tab1 = () => (
  <>
    <div className={s.left}>
      <p>
        Создадим видеоролик для&nbsp;целей ваших рекламныхи маркетинговых
        кампаний, Сами разработаем креатив.
      </p>
      <ul>
        {[TAGS.tv, TAGS.olv, TAGS.clv, TAGS.digital].map((tag, i) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
    </div>
    <div className={s.right}>
      <p>
        Работаем с&nbsp;бизнесом напрямую и&nbsp;сотрудничаем
        с&nbsp;агентствами. Закрываем весь цикл производства
        и&nbsp;сопутствующие задачи.
      </p>
      <LogoBox>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
      </LogoBox>
    </div>
  </>
);

const Tab2 = () => (
  <>
    <div className={s.left}>
      <p>РАССКАЗЫВАЕМ НАСТОЯЩИЕ ИСТОРИИ О&nbsp;ЛЮДЯХ И&nbsp;БРЕНДАХ.</p>
      <ul>
        {[TAGS.tv, TAGS.olv, TAGS.clv, TAGS.digital].map((tag, i) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
    </div>
    <div className={s.right}>
      <p>
        Работаем в&nbsp;короткой форме и&nbsp;снимаем полнометражные фильмы.
      </p>
      <LogoBox>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
      </LogoBox>
    </div>
  </>
);
const Tab3 = () => (
  <>
    <div className={s.left}>
      <p>ПРЕЗЕНТАЦИЯ КОМПАНИИ, УСЛУГИ И&nbsp;ПРОДУКТА НА&nbsp;ЯЗЫКЕ ФАКТОВ. </p>
      <ul>
        {["фильмы", "презентации", "визитки", "hr-ролики", "эксплейнеры"].map(
          (tag, i) => (
            <li key={i}>#{tag}</li>
          )
        )}
      </ul>
    </div>
    <div className={s.right}>
      <p>
        Умеем структурировать и&nbsp;компактно преподносить большие объемы
        информации.
      </p>
      <LogoBox>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
      </LogoBox>
    </div>
  </>
);

const Tab4 = () => (
  <>
    <div className={s.left}>
      <p>
        ЛЕТАЕМ НА&nbsp;СПОРТИВНЫХ ДРОНАХ. ДЕЛАЕМ FULL-FPV РОЛИКИ И&nbsp;ВНЕДРЯЕМ
        ИХ&nbsp;В&nbsp;ПРОЕКТЫ.
      </p>
      <ul>
        {[TAGS.aero, TAGS.extrim].map((tag, i) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
    </div>
    <div className={s.right}>
      <p>
        Снимаем экстремальные ролики. Летаем в&nbsp;ограниченных пространствах.
      </p>
      <LogoBox>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
      </LogoBox>
    </div>
  </>
);

const Tab5 = () => (
  <>
    <div className={s.left}>
      <p>
        СОЗДАЕМ ФИЛЬМЫ И&nbsp;СЕРИАЛЫ, КОТОРЫЕ ВЫХОДЯТ В&nbsp;ПРОКАТ
        И&nbsp;НА&nbsp;ОНЛАЙН-ПЛАТФОРМАХ.
      </p>
      <ul>
        {[TAGS.film, TAGS.web, TAGS.almanah, TAGS.show].map((tag, i) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
    </div>
    <div className={s.right}>
      <p>
        Делаем независимые проекты и&nbsp;создаем эксклюзивные проекты
        для&nbsp;платформ.
      </p>
      <LogoBox>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
      </LogoBox>
    </div>
  </>
);
const Tab6 = () => (
  <>
    <div className={s.left}>
      <p>
        ДЕЛАЕМ 2D И&nbsp;3D-ГРАФИКУ, МУЛЬТИПЛИКАЦИИЮ И&nbsp;VFX. МОНТАЖ,
        ЦЕТОКОРРЕКЦИЯ И&nbsp;САУНД-ДИЗАЙН.
      </p>
      <ul>
        {[TAGS.CG, TAGS.threeD, TAGS.VFX, TAGS.NFT].map((tag, i) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
    </div>
    <div className={s.right}>
      <p>CG, 2D, 3D, инфографика, монтаж, цветокоррекция</p>
      <LogoBox>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
        <SocialLink svg={"yandex"}>https:/</SocialLink>
      </LogoBox>
    </div>
  </>
);
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
