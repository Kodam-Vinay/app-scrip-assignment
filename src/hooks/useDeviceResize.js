import { useEffect, useState } from "react";

const useDeviceResize = () => {
  const [windowDetails, setWindowDetails] = useState({
    height: window.screen.height,
    width: window.screen.width,
  });
  useEffect(() => {
    window.addEventListener("resize", changeDisplayHeightAndWidth);
    return () => {
      window.removeEventListener("resize", changeDisplayHeightAndWidth);
    };
  }, []);

  const changeDisplayHeightAndWidth = () => {
    setWindowDetails({
      height: window.screen.availHeight,
      width: window.screen.availWidth,
    });
  };
  return windowDetails;
};
export default useDeviceResize;
