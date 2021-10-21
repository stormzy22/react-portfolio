import React from "react";

interface IProduct {
  link: string;
  img: string;
}

const Product: React.FC<IProduct> = ({ img, link }: IProduct): JSX.Element => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" loading="lazy" />
      </a>
    </div>
  );
};

export default Product;
