import s from "./podcast.module.scss";

export const Podcast = () => {
  return (
    <div className={s.wr}>
      <div className={s.wr_img}>
        <img src={require(`assets/podcast.png`)} alt="Backstage" />
      </div>
      <div className={s.content}>
        <h3>проект-подкаст “Портфолио”</h3>
        // todo текст расположить
        <p>
          На канале выходит авторский подкаст “Портфолио” — разговоры с представителями креативной индустрии об их пути, карьере и профессии.
        </p>
        <p>
          На канале выходит авторский подкаст “Портфолио” — разговоры с представителями креативной индустрии об их пути, карьере и профессии.
        </p>
        <Button />
      </div>
    </div>
  );
};

const Button = () => (
  <a
    href="https://www.youtube.com/@cosmovisioner/videos"
    target="_blank"
    rel="noopener noreferrer"
    className={s.more}
  >
    <span>→</span> Смотреть
  </a>
);
