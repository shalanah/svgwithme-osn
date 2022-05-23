import { useEffect, useRef, useState } from "react";
import { textIsSelected, isElDescendentOf } from "../lib";

const useSlideAnimate = () => {
  const [clicks, setClick] = useState(0);
  const [maxAnimateIn, setMaxAnimateIn] = useState(undefined);
  const ref = useRef(null);

  // Find how many elements to animate in
  useEffect(() => {
    if (maxAnimateIn === undefined && ref && ref.current) {
      setMaxAnimateIn(ref.current.querySelectorAll(".animateIn").length);
    }
  }, [maxAnimateIn, ref]);

  // Set classnames for starting animation
  useEffect(() => {
    if (clicks !== undefined) {
      [...ref.current.querySelectorAll(".animateIn")].forEach((el, i) => {
        if (i < clicks) el.classList.add("start");
        else el.classList.remove("start");
      });
    }
  }, [clicks]);

  // Update state if have classes to animate in
  const onClick = !!maxAnimateIn
    ? (e) => {
        // Exiting click if selecting text or clicked on an a-tag or button
        if (isElDescendentOf(e.target, ["button", "a"]) || textIsSelected())
          return;
        setClick((i) => Math.min(i + 1, maxAnimateIn));
      }
    : undefined;

  return [ref, onClick];
};

export default useSlideAnimate;
