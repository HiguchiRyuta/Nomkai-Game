"use client";
import { useState, useEffect, useCallback } from "react";
import {
  BreakPointContextType,
  BREAK_POINTS,
} from "src/common/context/BreakPointContext/types";

const useBreakPoint = () => {
  const [breakPoint, setBreakPoint] = useState<BreakPointContextType>("xs");

  const onResize = useCallback(() => {
    const width = window.innerWidth;
    let size: BreakPointContextType = "xl";
    if (width < BREAK_POINTS.sm) {
      size = "xs";
    } else if (width < BREAK_POINTS.md) {
      size = "sm";
    } else if (width < BREAK_POINTS.lg) {
      size = "md";
    } else if (width < BREAK_POINTS.xl) {
      size = "lg";
    }
    setBreakPoint(size);
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return breakPoint;
};

export default useBreakPoint;
