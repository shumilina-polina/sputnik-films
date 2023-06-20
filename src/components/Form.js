export const Form = () => {
  return (
    <form onSubmit={sendEmail} className={s.form}>
          <input
            type="text"
            placeholder={t("main.contact.placeholders.name")}
            pattern="^[A-Za-zА-Яа-яЁё\s]+$"
            maxLength={100}
            name="name"
          />
          <input
            type="tel"
            placeholder={t("main.contact.placeholders.phone")}
            pattern="[1-9][0-9]{10}"
            required
            name="phone"
          />
          <input
            type="email"
            placeholder={t("main.contact.placeholders.email")}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            maxLength={50}
            required
            name="email"
          />
      <textarea
        placeholder={t("main.contact.placeholders.form")}
        minLength={1}
        maxLength={800}
        required
        name="text"
      ></textarea>
    </form>
  );
};
