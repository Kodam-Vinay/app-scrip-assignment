import React, { useState } from "react";
import "../css/Filter.css";
import { downArrowSVG, upArrowSVG } from "./constants";

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
    <div className="filter">
      <div className="container-filter" onClick={toggleCollapse}>
        <span className="filter-name">{name}:</span>
        <div className="arrow-icon">
          {collapsed ? downArrowSVG : upArrowSVG}
        </div>
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
        <div className="options-container">
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
      <div className="show-all-filters">
        <label>
          <input
            type="checkbox"
            checked={showAllFilters}
            onChange={handleShowAllFiltersChange}
          />
          Customizable
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
