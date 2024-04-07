import { useEffect } from "react";

const useGetData = ({
  apiUrl,
  setProductList,
  setIsError,
  setError,
  setLoading,
}) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const reponse = await fetch(apiUrl);
      const data = await reponse.json();
      if (reponse.ok) {
        setProductList(data);
      } else {
        setIsError(true);
        setError(data?.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
};
export default useGetData;
