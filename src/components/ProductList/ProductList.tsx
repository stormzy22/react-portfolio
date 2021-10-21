import React from "react";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList: React.FC = (): JSX.Element => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It&apos;s Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products?.map((i, e) => (
          <Product key={e} link={i?.link} img={i?.img} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
