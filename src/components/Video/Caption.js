import s from "./video.module.scss";

const Caption = ({ children, tags = [], category = "" }) => {
  return (
    <figure className={s.caption}>
      <div
        className={s.caption_text}
        data-aos="fade-right"
        data-aos-duration="500"
      >
        {children}
      </div>
      <ul className={s.caption_tag}>
        <li>{category}</li>
        <li>
          {tags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </li>
      </ul>
    </figure>
  );
};

export default Caption;
