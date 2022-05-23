import { useEffect, useState } from "react";

const getWinDim = () => {
  return { width: window?.innerWidth || 0, height: window?.innerHeight || 0 };
};

const useWinSize = () => {
  const [dim, setDim] = useState(getWinDim());
  useEffect(() => {
    const onResize = () => {
      setDim(getWinDim());
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return dim;
};

export default useWinSize;
