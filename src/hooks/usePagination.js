import { useState, useEffect } from "react";
import usePrevious from "./usePrevious";

const clamp = (val, min, max) => Math.min(Math.max(Number(val), min), max);

const findSection = () => {
  const mid = window.innerHeight / 2;
  const sections = document.getElementsByTagName("section");
  const mids = [...sections].map((el) => {
    const { top, height } = el.getBoundingClientRect();
    return top + height / 2;
  });
  return mids.findIndex((v) => Math.abs(v - mid) < mid) || 0;
};

const usePagination = (max) => {
  const [section, setSection] = useState(0);
  const [btnScroll, setBtnScroll] = useState(false);
  const prevBtnScroll = usePrevious(btnScroll);

  // Update
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
      const nextSlide = document.getElementsByTagName("section")[section];
      nextSlide.scrollIntoView();
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [section, btnScroll]);

  // useEffect(() => {
  //   if (prevBtnScroll && !btnScroll) {
  //     const index = findSection();
  //     if (section !== index) setSection(index);
  //   }
  // }, [section, btnScroll, prevBtnScroll]);

  const onInput = (e) => {
    const val = e.target.value;
    if (isNaN(val)) return;
    else {
      setBtnScroll(true);
      setSection(() => clamp(Math.round(Number(val - 1)), 0, max));
    }
  };

  return [section, setSection, setBtnScroll, onInput];
};

export default usePagination;
