import useWinSize from "./useWinSize";

const useCodepenSize = ([t = 0, r = 0, b = 0, l = 0]) => {
  const dim = useWinSize();
  const scale = 1.9; // to make more legible
  const width = (dim.width - (r + l)) / scale;
  const height = (dim.height - (t + b)) / scale;
  return [width, height, scale];
};

export default useCodepenSize;
