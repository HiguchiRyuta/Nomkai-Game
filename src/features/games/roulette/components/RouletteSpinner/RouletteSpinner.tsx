"use client";
import Image from "next/image";
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from "react";

import { BreakPointContext } from "src/common/context/BreakPointContext/BreakPointContext";
import styles from "./RouletteSpinner.module.css";

type P = {
  onClick: React.MouseEventHandler<HTMLImageElement>;
  degree: number;
  spinSpeed: number;
};

const RouletteSpinner = React.memo<P>(function Roulette(props) {
  const breakPoint = useContext(BreakPointContext);

  const iamgeWithHeight = useMemo(() => {
    switch (breakPoint) {
      case "xs": {
        return 350;
      }
      case "sm": {
        return 500;
      }
      case "md": {
        return 650;
      }
      case "lg": {
        return 800;
      }
      case "xl": {
        return 1000;
      }
    }
  }, [breakPoint]);

  return (
    <Image
      data-break-poinst={breakPoint}
      className={styles.spinner}
      src="/images/beer-bottle.png"
      alt="beer-bottle"
      // width={iamgeWithHeight}
      // height={iamgeWithHeight}
      style={{
        transform: `rotate(${props.degree}deg) ${
          props.spinSpeed !== 0 ? `rotate(${props.spinSpeed}deg)` : ""
        }`,
      }}
      onClick={props.onClick}
    />
  );
});

export default RouletteSpinner;
