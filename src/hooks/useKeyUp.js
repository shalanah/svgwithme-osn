import { useEffect } from "react";

function useKeyUp(targetKey, func) {
  useEffect(() => {
    const onKeyUp = ({ key }) => {
      if (key === targetKey && func) {
        func();
      }
    };
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [targetKey, func]);
}

export default useKeyUp;
