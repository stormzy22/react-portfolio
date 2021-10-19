import React from "react";

const Intro: React.FC = (): JSX.Element => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">John Stone</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              {I_TITLE_ITEM?.map((text, i) => (
                <div className="i-title-item" key={i}>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="i-desc">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;

const I_TITLE_ITEM = ["Web Developer", "UI/UX Designer", "Photographer", "Writer", "Content Creator"];
