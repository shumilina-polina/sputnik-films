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
import { useRef, useState } from "react";

const Form = () => {
  const radio = useRef(null);
  const budget = useRef(null);
  const [sended, setSended] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    Array.from(radio.current.children).map((elem) => {
      if (elem.children[0].classList.contains("Mui-checked"))
        budget.current.value = elem.children[1].innerText;
    });
    setSended(true);
    setTimeout(() => setSended(false), 7000);

    emailjs
      .sendForm(
        "service_oehg3o9",
        "template_9g36tcc",
        e.target,
        "FYs-0bvxU_HGakpQL"
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
    <div className={s.wr}>
      <form className={s.form} id="contactForm" onSubmit={sendEmail}>
        <div>
          <FormControl
            className={s.form_control}
            style={{ opacity: sended && "0" }}
          >
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
                maxLength: 60,
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
            <RadioGroup defaultValue={0} ref={radio}>
              {["<1 млн", "1-3 млн", "3-5 млн", ">5 млн"].map((elem, index) => (
                <FormControlLabel
                  key={index}
                  control={<Radio value={index} />}
                  label={elem}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <input
            style={{ display: "none" }}
            ref={budget}
            type="text"
            name="budget"
          />
          {sended && (
            <section className={s.sended}>
              <h3>Спасибо!</h3>
              <p>
                Ваша заявка уже летит к нам. <br /> Ответим в течение часа.
              </p>
            </section>
          )}
        </div>
      </form>

      <button
        disabled={sended}
        className="button"
        form="contactForm"
        type="submit"
      >
        Отправить
      </button>
    </div>
  );
};

export default Form;
