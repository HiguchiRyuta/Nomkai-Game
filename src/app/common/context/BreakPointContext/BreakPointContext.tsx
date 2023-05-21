"use client";
import React from "react";
import useBreakPoint from "../../hooks/useBreakPoint";
import { BreakPointContextType } from "./types";

export const BreakPointContext =
  React.createContext<BreakPointContextType>("md");
type P = {
  children: React.ReactNode;
};
export const BreakPointContextProvider = React.memo<P>(
  function BreakPointContextProvider(props) {
    const breakPoint = useBreakPoint();
    return (
      <BreakPointContext.Provider value={breakPoint}>
        {props.children}
      </BreakPointContext.Provider>
    );
  }
);
