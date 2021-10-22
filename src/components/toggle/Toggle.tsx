import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle: React.FC = (): JSX.Element => {
  const { dispatch, state } = useContext(ThemeContext);

  const handleToggle = () => {
    dispatch && dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src="/image/sun.png" alt="" className="t-icon" />
      <img src="/image/moon.png" alt="" className="t-icon" />
      <div className="t-button " onClick={handleToggle} style={{ left: state?.darkMode ? "0px" : "25px" }}></div>
    </div>
  );
};

export default Toggle;
