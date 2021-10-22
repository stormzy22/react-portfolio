import React, { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = (): JSX.Element => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div style={{ background: darkMode ? "#222" : "white", color: darkMode ? "white" : "black" }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
