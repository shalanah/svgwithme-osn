import { useState, useEffect } from "react";
import { clamp } from "../lib";
import useKeyUp from "./useKeyUp";

const findSection = () => {
  const mid = window.innerHeight / 2;
  const sections = document.getElementsByTagName("section");
  const mids = [...sections].map((el) => {
    const { top, height } = el.getBoundingClientRect();
    return top + height / 2;
  });
  return (mids.findIndex((v) => Math.abs(v - mid) < mid) || 0) + 1;
};

const usePagination = (min, max) => {
  const [section, setSection] = useState(min);
  const [btnScroll, setBtnScroll] = useState(false);

  const onPrev = () => {
    if (btnScroll) return; // one at a time please, bc of scroll updating value too
    setBtnScroll(true);
    setSection((v) => clamp(v - 1, min, max));
  };
  const onNext = () => {
    if (btnScroll) return;
    setBtnScroll(true);
    setSection((v) => clamp(v + 1, min, max));
  };

  useKeyUp("ArrowUp", onPrev);
  useKeyUp("ArrowDown", onNext);

  // Update slide number when scrolling to new section
  useEffect(() => {
    const onScroll = (e) => {
      if (!btnScroll) {
        const index = findSection();
        if (section !== index) setSection(index);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [section, btnScroll]);

  // Undo btnScroll after we have arrived at location (done scrolling)
  useEffect(() => {
    let scrollTimeout;
    const onScroll = () => {
      if (btnScroll) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
          setBtnScroll(false);
        }, 100);
      }
    };
    if (btnScroll) {
      onScroll();
      const nextSlide = document.getElementsByTagName("section")[section - 1];
      nextSlide.scrollIntoView();
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      if (btnScroll) window.removeEventListener("scroll", onScroll);
    };
  }, [section, btnScroll]);

  // For number input
  const onInput = (e) => {
    const val = e.target.value;
    if (isNaN(val)) return;
    if (btnScroll) return; // one at a time please, bc of scroll updating value too
    setBtnScroll(true);
    setSection(() => clamp(Math.round(Number(val)), min, max));
  };

  return [section, onInput, btnScroll, onPrev, onNext];
};

export default usePagination;
