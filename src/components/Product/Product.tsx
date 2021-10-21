import React from "react";

interface IProduct {
  link: string;
  img: string;
}

const Product: React.FC<IProduct> = (): JSX.Element => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
    </div>
  );
};

export default Product;
