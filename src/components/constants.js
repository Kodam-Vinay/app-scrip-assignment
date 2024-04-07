import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export const recommendedLists = [
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

export const MettaMuseList = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

export const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

export const FollowList = [BsInstagram(), FaFacebook()];

export const downArrowSVG = (
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

export const upArrowSVG = (
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

export const API_URL = "https://fakestoreapi.com/products";
export const sortResults = function ({ selectedOption, productList }) {
  if (selectedOption === recommendedLists[1].id) {
    return productList.sort((a, b) => b?.id - a?.id);
  } else if (selectedOption === recommendedLists[2].id) {
    return productList.sort((a, b) => b?.rating?.rate - a?.rating?.rate);
  } else if (selectedOption === recommendedLists[3].id) {
    return productList.sort((a, b) => b?.price - a?.price);
  } else if (selectedOption === recommendedLists[4].id) {
    return productList.sort((a, b) => a?.price - b?.price);
  } else {
    return productList.sort((a, b) => b?.rating?.count - a?.rating?.count);
  }
};
