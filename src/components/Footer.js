import "../css/Contact.css";
import { PiDiamondFill } from "react-icons/pi";
import UsLogo from "../svgs/UsLogo";
import {
  FollowList,
  MettaMuseList,
  downArrowSVG,
  quickLinks,
  upArrowSVG,
} from "./constants";
import React, { useState } from "react";
import { v4 as uniqueId } from "uuid";
import AcceptedPayments from "../svgs/AcceptedPayments";

const Footer = () => {
  const [footerList, setFooterList] = useState([
    { name: "mettā muse", list: [MettaMuseList], collapse: false },
    { name: "Quick Links", list: [quickLinks], collapse: false },
    { name: "Follow Us", list: [FollowList], collapse: false },
  ]);

  const collapseMenuFn = (index_id) => {
    let newfooterList = footerList.map((footer, index) => {
      if (index_id === index) {
        footer.collapse = !footer.collapse;
      }
      return footer;
    });
    setFooterList(newfooterList);
  };
  const returnEachList = (list) => {
    return list?.map((each) => (
      <div key={uniqueId()} className="each-map-clickable-link">
        {each}
      </div>
    ));
  };
  return (
    <footer className="contact-container">
      <div className="contact-first-section-container">
        <div className="contact-form-with-email-container">
          <p className="contact-be-first-text">BE THE FIRST TO KNOW</p>
          <p className="contact-para-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <form
            className="email-contact-input-container"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Enter your e-mail..." />
            <button type="button">SUBSCRIBE</button>
          </form>
          <hr className="horizontal-rule hide-contact-item" />
        </div>
        <div className="contact-number-container add-left-margin contact-contact-container">
          <div className="contact-number-container">
            <p className="hide-contact-item set-margin-zero">CALL US</p>
            <p className="show-contact-item set-margin-zero">CONTACT US</p>
            <div className="display-number-email-container">
              <p className="set-margin-zero make-margin-to-p">
                +44 221 133 5360
              </p>
              <PiDiamondFill
                color="white"
                size={5}
                className="diamond-symbol"
              />
              <p className="set-margin-zero make-margin-to-p">
                customercare@mettamuse.com
              </p>
            </div>
          </div>
          <div className="contact-number-container add-margin-top">
            <p className="set-margin-zero ">CURRENCY</p>
            <div className="us-logo-cuurency-type">
              <UsLogo className="us-logo" />
              <PiDiamondFill color="white" size={5} />
              <p className="set-margin-zero make-margin-to-p">USD</p>
            </div>
            <p className="show-contact-item currency-para-text">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="contact-second-section-container hide-contact-item">
        {footerList.map((item, index) => {
          return (
            <div
              key={uniqueId()}
              className="border-bottom footer-list-container"
            >
              <div
                className="footer-item"
                onClick={() => collapseMenuFn(index)}
              >
                <p>{item.name}</p>
                {item.collapse ? upArrowSVG : downArrowSVG}
              </div>
              <div className="make-vertical">
                {item.collapse && (
                  <div className="footer-list">
                    {item.list.map((list) => {
                      return (
                        <h5 key={uniqueId()} className="each-footer-item">
                          {list}
                        </h5>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <h4>mettā muse Accepts</h4>
        <AcceptedPayments />
        <h6 className="text-center">
          Copyright © 2023 mettamuse. All rights reserved.
        </h6>
      </div>
      <div className="navigation-contact-for-desktop">
        <div>
          <h3>mettā muse</h3>
          {returnEachList(MettaMuseList)}
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          {returnEachList(quickLinks)}
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <div className="horizontal-alignment">
            {returnEachList(FollowList)}
          </div>
          <h4>mettā muse Accepts</h4>
          <AcceptedPayments />
        </div>
      </div>
      <h6 className="text-center">
        Copyright © 2023 mettamuse. All rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;
