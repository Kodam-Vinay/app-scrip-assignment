import { useState } from "react";
import "../css/Body.css";

const recommendedLists = [
  {
    id: "recommended",
    value: "RECOMMENDED",
  },
  {
    id: "newest_first",
    value: "NEWEST FIRST",
  },
  {
    id: "popular",
    value: "POPULAR",
  },
  {
    id: "price_high_to_low",
    value: "PRICE: HIGH TO LOW",
  },
  {
    id: "price_low_to_high",
    value: "PRICE: HIGH TO LOW",
  },
];

const Body = () => {
  const [selectedOption, setSelectedOption] = useState(recommendedLists[0].id);
  const [showFilter, setShowFilter] = useState(false);
  console.log(selectedOption);
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
    </div>
  );
};

export default Body;
