import React from "react";

const Contact: React.FC = (): JSX.Element => {
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
          <form>
            <input type="text" name="user_name" id="" placeholder="Name" />
            <input type="text" name="user_subject" id="" placeholder="Subject" />
            <input type="text" name="user_email" id="" placeholder="Email" />
            <textarea name="" id="" cols={30} rows={5}></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const contact_icon: string[] = ["fa-phone-volume +212-220-8600", "fa-envelope mail@mail.com", "fa-map-marked-alt 700-Louisiana-Street-39th-Floor-Houston,-TX-77002"];
