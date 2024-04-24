import { useState, useEffect, useRef, useCallback } from "react";

import CarInfoPanel from "./CarInfoPanel";
import { useImageComparison } from "../hooks/useImageComparison";

const ImageComparison = () => {
  const {
    isDesktop,
    handleStart,
    handleEnd,
    handleMove,
    parentRef,
    topPanelRef,
    handleRef,
  } = useImageComparison();

  return (
    <main
      className="relative w-full min-h-screen overflow-hidden skewed"
      ref={parentRef}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseUp={handleEnd}
      onTouchEnd={handleEnd}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <CarInfoPanel
        isDesktop={isDesktop}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onMouseUp={handleEnd}
        onTouchEnd={handleEnd}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        topPanelRef={topPanelRef}
      />

      <div className="handle" ref={handleRef}></div>
    </main>
  );
};

export default ImageComparison;
