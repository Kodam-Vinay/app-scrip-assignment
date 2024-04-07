import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="each-page-container">
      <h3>Contact Page</h3>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="each-page-container-button"
      >
        Home
      </button>
    </div>
  );
};

export default Contact;
