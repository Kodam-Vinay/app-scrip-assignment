import "../css/EachProduct.css";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const EachProduct = ({
  productDetails,
  setIsButtonClicked,
  isButtonClicked,
}) => {
  const updatedTitle = productDetails?.title?.slice(0, 15) + "..";
  return (
    <div className="each-product-container">
      <img
        src={productDetails?.image}
        alt={productDetails?.image}
        className="product-image"
      />
      <div className="product-text-heart-container">
        <div className="prodcut-text-container">
          <p className="product-title">{updatedTitle}</p>
          <p className="product-price">
            <span>Sign in</span> or Create an account to see pricing
          </p>
        </div>

        <button
          className="each-navbar-icon-button"
          onClick={() => setIsButtonClicked(productDetails?.id)}
        >
          {isButtonClicked === productDetails?.id ? (
            <GoHeartFill size={25} color="red" />
          ) : (
            <GoHeart size={25} />
          )}
        </button>
      </div>
    </div>
  );
};

export default EachProduct;
