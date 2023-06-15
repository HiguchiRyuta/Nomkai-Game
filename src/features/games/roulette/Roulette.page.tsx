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
import RouletteSpinner from "./components/RouletteSpinner/RouletteSpinner";
import RouletteService from "./service/RouletteService";
import styles from "./Roulette.module.css";

const Roulette = React.memo(function Roulette() {
  const breakPoint = useContext(BreakPointContext);
  const rouletteServiceInstance = useMemo(() => new RouletteService(), []);
  const [degree, setDegree] = useState(0);
  const [spinSpeed, setSpinSpeed] = useState(0);

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

  const handleCickSpin = useCallback(() => {
    rouletteServiceInstance.init();
    rouletteServiceInstance.start();
    setSpinSpeed(rouletteServiceInstance.spinSpeed);
  }, [rouletteServiceInstance]);

  return (
    <div className={styles.root}>
      <RouletteSpinner
        onClick={handleCickSpin}
        degree={degree}
        spinSpeed={spinSpeed}
      />
    </div>
  );
});

export default Roulette;
