import { RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import ReactRouter from "./components/ReactRouter";

const RenderLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  const router = ReactRouter({ RenderLayout });
  return (
    <div className="app-main-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
