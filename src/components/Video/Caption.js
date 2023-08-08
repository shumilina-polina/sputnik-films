import s from "./video.module.scss";

const Caption = ({ children, tags = [], category = "", fade = "left" }) => {
  return (
    <figure
      className={s.caption}
      data-aos-offset="0"
      data-aos={`fade-${fade}`}
      data-aos-duration="500"
    >
      <div className={s.caption_text}>{children}</div>
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
