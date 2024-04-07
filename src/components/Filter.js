import React, { useState } from "react";
import "../css/Filter.css";

const downArrowSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-down"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const upArrowSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-up"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1.646 11.646a.5.5 0 0 1 .708 0L8 5.293l5.646 5.647a.5.5 0 0 1-.708.708L8 6.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
    />
  </svg>
);

const CollapsibleFilterCategory = ({ name, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleUnselectAll = () => {
    setSelectedOptions([]);
  };

  const getSelectedText = () => {
    if (selectedOptions.length === options.length) {
      return "All";
    } else if (selectedOptions.length > 0) {
      return selectedOptions.join(", ");
    } else {
      return "";
    }
  };

  return (
    <div>
      <div className="container-filter" onClick={toggleCollapse}>
        <label>{name}:</label>
        <div>{collapsed ? downArrowSVG : upArrowSVG}</div>
      </div>
      <div>
        <p>{getSelectedText()}</p>
      </div>

      {selectedOptions.length > 0 && (
        <button onClick={handleUnselectAll} className="custom-filter-btn">
          Unselect All
        </button>
      )}

      {!collapsed && (
        <div>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CollapsibleFilter = () => {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const handleShowAllFiltersChange = (event) => {
    setShowAllFilters(event.target.checked);
  };

  const filterCategories = [
    { name: "Ideal For", options: ["Men", "Women", "Baby & Kids"] },
    { name: "Fabric", options: ["Cotton", "Silk", "Wool", "Polyester"] },
    { name: "Segment Suitable For", options: ["Men", "Women", "Kids"] },
    { name: "Raw Materials", options: ["Leather", "Plastic", "Metal", "Wood"] },
    { name: "Pattern", options: ["Stripes", "Floral", "Checkered", "Solid"] },
    // Add more categories as needed
  ];

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showAllFilters}
            onChange={handleShowAllFiltersChange}
          />
          Customizble
        </label>
      </div>
      {showAllFilters &&
        filterCategories.map((category, index) => (
          <CollapsibleFilterCategory
            key={index}
            name={category.name}
            options={category.options}
          />
        ))}
    </div>
  );
};

export default CollapsibleFilter;
