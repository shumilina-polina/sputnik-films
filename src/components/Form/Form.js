import emailjs from "@emailjs/browser";
import s from "./form.module.scss";
import {
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g5bbd95",
        "template_b1izhed",
        e.target,
        "b9BCqPQmwMN7r8f4z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <div className={s.wr} data-aos="fade-right" data-aos-offset="500">
      <form
        className={s.form}
        id="contactForm"
        // onSubmit={sendEmail}
      >
        <FormControl className={s.form_control}>
          <InputLabel htmlFor="fio-input">Ваше имя</InputLabel>
          <Input
            inputProps={{
              maxLength: 40,
              name: "name",
              required: true,
              type: "text",
            }}
            id="fio-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="company-input">компания</InputLabel>
          <Input
            inputProps={{
              maxLength: 60,
              name: "company",
              required: true,
              type: "text",
            }}
            id="company-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="phone-input">
            Telegram или номер телефона
          </InputLabel>
          <Input
            inputProps={{
              maxLength: 20,
              name: "phone",
              required: true,
              type: "tel",
            }}
            id="phone-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="issue-input">
            Расскажите кратко о задаче
          </InputLabel>
          <Input
            inputProps={{
              maxLength: 100,
              name: "issue",
              required: true,
              type: "text",
            }}
            id="issue-input"
          />
        </FormControl>

        <FormControl>
          <label>Бюджет</label>
          <RadioGroup defaultValue={0}>
            {["<1 млн", "1-3 млн", "3-5 млн", ">5 млн"].map((elem, index) => (
              <FormControlLabel
                key={index}
                control={<Radio value={index} />}
                label={elem}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </form>
      <button className="button" form="contactForm" type="submit">
        Отправить
      </button>
    </div>
  );
};

export default Form;
