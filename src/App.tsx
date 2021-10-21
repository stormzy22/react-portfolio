import React from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/ProductList/ProductList";

const App = (): JSX.Element => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;
