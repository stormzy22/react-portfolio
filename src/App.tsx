import React from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";

const App = (): JSX.Element => {
  return (
    <div>
      <Intro />
      <About />
    </div>
  );
};

export default App;
