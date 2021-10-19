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
              <div className="i-title-item"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
