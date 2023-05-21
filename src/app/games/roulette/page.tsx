"use client";
import Image from "next/image";
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from "react";

import { BreakPointContext } from "src/app/common/context/BreakPointContext/BreakPointContext";
import RouletteService from "./service/RouletteService";
import styles from "./style/Roulette.module.css";

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

  const onSpinSpeedChange = useCallback((newSpinSpeed: number) => {
    setSpinSpeed(newSpinSpeed);
  }, []);

  const onDegreeChange = useCallback((newDegree: number) => {
    setDegree(newDegree);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      const now = new Date().getTime();
      rouletteServiceInstance.init({ x, y }, now);
    },
    [rouletteServiceInstance]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      if (!rouletteServiceInstance.initialized) {
        rouletteServiceInstance.init({ x, y }, new Date().getTime());
      }
      rouletteServiceInstance.update({ x, y });
      setDegree(rouletteServiceInstance.degree);
    },
    [rouletteServiceInstance]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<HTMLImageElement>) => {
      const now = new Date().getTime();
      rouletteServiceInstance.start(now);
      setSpinSpeed(rouletteServiceInstance.spinSpeed);
    },
    [rouletteServiceInstance]
  );

  const handleCickSpin = useCallback(() => {
    rouletteServiceInstance.init();
    rouletteServiceInstance.start();
    setSpinSpeed(rouletteServiceInstance.spinSpeed);
  }, [rouletteServiceInstance]);

  const imageProps = useMemo(() => {
    // todo
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
      };
    }
    return {
      onClick: handleCickSpin,
    };
  }, [handleCickSpin, handleTouchEnd, handleTouchMove, handleTouchStart]);

  useEffect(() => {
    rouletteServiceInstance.on(
      RouletteService.events.onSpeedChange,
      onSpinSpeedChange
    );
    rouletteServiceInstance.on(
      RouletteService.events.onDegreeChange,
      onDegreeChange
    );
    return () => {
      rouletteServiceInstance.off(
        RouletteService.events.onSpeedChange,
        onSpinSpeedChange
      );
      rouletteServiceInstance.off(
        RouletteService.events.onDegreeChange,
        onDegreeChange
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinSpeed]);

  return (
    <div className={styles.root}>
      <Image
        src="/images/beer-bottle.png"
        alt="beer-bottle"
        width={iamgeWithHeight}
        height={iamgeWithHeight}
        style={{
          transform: `rotate(${degree}deg) ${
            spinSpeed !== 0 ? `rotate(${spinSpeed}deg)` : ""
          }`,
        }}
        {...imageProps}
      />
    </div>
  );
});

export default Roulette;
