import "../css/Contact.css";
import { PiDiamondFill } from "react-icons/pi";
import UsLogo from "../svgs/UsLogo";

const Contact = () => {
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
        <div className="contact-number-container">
          <p className="hide-contact-item set-margin-zero">CALL US</p>
          <p className="show-contact-item set-margin-zero">CONTACT US</p>
          <div className="display-number-email-container">
            <p className="set-margin-zero make-margin-to-p">+44 221 133 5360</p>
            <PiDiamondFill color="white" size={5} className="diamond-symbol" />
            <p className="set-margin-zero make-margin-to-p">
              customercare@mettamuse.com
            </p>
          </div>
          <div className="us-logo-cuurency-type">
            <UsLogo className="us-logo" />
            <PiDiamondFill color="white" size={5} />
            <p className="set-margin-zero make-margin-to-p">USD</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
