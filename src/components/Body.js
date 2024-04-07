import { useEffect, useState } from "react";
import "../css/Body.css";
import Filter from "./Filter";
import Footer from "./Footer";
import Products from "./Products";
import useGetData from "../hooks/useGetData";
import { API_URL, recommendedLists, sortResults } from "./constants";
import ErrorPage from "../Pages/ErrorPage";
import { CirclesWithBar } from "react-loader-spinner";

const Body = () => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(recommendedLists[0].id);
  const [showFilter, setShowFilter] = useState(false);
  const apiUrl = API_URL;
  useGetData({ apiUrl, setProductList, setIsError, setError, setLoading });
  const data = sortResults({ productList, selectedOption });

  useEffect(() => {
    setProductList(data);
  }, [selectedOption]);

  if (isError) {
    return <ErrorPage error={error} />;
  }
  return (
    <div className="body-container">
      <div className="body-text-container">
        <h3 className="dicover-products-text">DISCOVER OUR PRODUCTS</h3>
        <p className="dicover-products-text-para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="body-filter-header-container">
        <button
          type="button"
          className="filter-button"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTER
        </button>
        <span className="vertical-rule" style={{ marginBottom: "10px" }}>
          |
        </span>
        <select
          onChange={(e) => setSelectedOption(e.target.value)}
          className="recommended-filter"
        >
          {recommendedLists.map((each, index) => (
            <option
              value={each?.id}
              key={index}
              className={
                selectedOption === each?.id ? "" : "active-navigation-link-item"
              }
            >
              {selectedOption === each?.id ? "✔ " + each?.value : each?.value}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row border products-flex-col">
        {showFilter && <Filter />}
        {loading && !isError ? (
          <div className="loader-container">
            <CirclesWithBar
              height="100"
              width="100"
              color="#4fa94d"
              outerCircleColor="#4fa94d"
              innerCircleColor="#4fa94d"
              barColor="#4fa94d"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : !loading && !error ? (
          <Products productsData={productList} />
        ) : (
          <p>No data Found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
