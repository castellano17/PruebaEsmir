import { useState, useEffect, useRef, useCallback } from "react";

export const useImageComparison = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [skewHack, setSkewHack] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const parentRef = useRef();
  const topPanelRef = useRef();
  const handleRef = useRef();

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  let delta = 0;

  const handleStart = (event) => {
    setIsTouching(true);
    if (event.touches) {
      delta = (event.touches[0].clientX - window.innerWidth / 2) * 0.5;
    } else {
      delta = (event.clientX - window.innerWidth / 2) * 0.5;
    }
  };

  const handleEnd = () => {
    setIsTouching(false);
  };

  const handleMove = (event) => {
    if (isTouching) {
      let clientX;
      if (event.touches) {
        clientX = event.touches[0].clientX;
      } else {
        clientX = event.clientX;
      }
      handleRef.current.style.left = clientX + delta + "px";
      topPanelRef.current.style.width = clientX + skewHack + delta + "px";
    }
  };

  useEffect(() => {
    if (parentRef.current.className.includes("skewed")) {
      setSkewHack(1000);
    }
  }, []);

  return {
    isDesktop,
    handleStart,
    handleEnd,
    handleMove,
    parentRef,
    topPanelRef,
    handleRef,
  };
};
