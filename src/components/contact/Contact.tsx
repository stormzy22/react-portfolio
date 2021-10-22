import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact: React.FC = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (formRef.current !== null) {
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAILJS_USER_ID).then(
        () => {
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let&apos;s discuss your project</h1>
          <div className="c-info">
            {contact_icon?.map((i, e) => (
              <div className="c-info-item" key={e}>
                <i className={`fas ${i?.split(" ")[0]}`}></i> {i?.split(" ")[1]?.replace(/-/g, " ")}
              </div>
            ))}
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="user_name" id="" placeholder="Name" className={darkMode ? "input-grey" : ""} />
            <input type="text" name="user_subject" id="" placeholder="Subject" className={darkMode ? "input-grey" : ""} />
            <input type="text" name="user_email" id="" placeholder="Email" className={darkMode ? "input-grey" : ""} />
            <textarea name="message" id="" cols={30} rows={5} placeholder="Message" className={darkMode ? "input-grey" : ""}></textarea>
            <button>Submit</button>
            <h2> {done && "Message successfully Sent"}</h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const contact_icon: string[] = ["fa-phone-volume +212-220-8600", "fa-envelope mail@mail.com", "fa-map-marked-alt 700-Louisiana-Street-39th-Floor-Houston,-TX-77002"];
