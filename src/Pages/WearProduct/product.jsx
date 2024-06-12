import React, { useContext } from "react";
import Card2 from "../../Components/Card2/card";
import { productContext } from "../../Context/productContext";
import "./product.css";

const Product = () => {
  const { gymwears } = useContext(productContext);
  return (
    <div className="product-page">
      <div className="product-container">
        <p>Best wears for your workout</p>
        <div className="products">
          {gymwears.map((item, i) => {
            return (
              <Card2 img={item.image} name={item.name} price={item.new_price} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
