import React, { useState } from "react";
import "../css/Product.css";
import EachProduct from "./EachProduct";

const Products = ({ productsData }) => {
  const [isButtonClicked, setIsButtonClicked] = useState([]);
  return (
    <div className="products-container">
      {productsData?.map((each) => (
        <EachProduct
          productDetails={each}
          key={each?.id}
          setIsButtonClicked={setIsButtonClicked}
          isButtonClicked={isButtonClicked}
        />
      ))}
    </div>
  );
};

export default Products;
