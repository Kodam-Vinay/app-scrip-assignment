import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Body from "./Body";
import Shop from "../Pages/Shop";
import Skills from "../Pages/Skills";
import Stories from "../Pages/Stories";
import ContactUs from "../Pages/ContactUs";
import About from "../Pages/About";

const ReactRouter = ({ RenderLayout }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RenderLayout />,
      children: [
        {
          path: "",
          element: <Body />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "stories",
          element: <Stories />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return router;
};

export default ReactRouter;
