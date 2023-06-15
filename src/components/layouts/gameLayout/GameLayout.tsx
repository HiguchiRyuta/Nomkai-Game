import React from "react";

import { BreakPointContextProvider } from "../../../common/context/BreakPointContext/BreakPointContext";
import styles from "./GameLayout.module.css";
import Header from "../../parts/header/Header";

type P = {
  children: React.ReactNode;
};

const GameLayout = React.memo(function GameLayout(props: P) {
  return (
    <main className={styles.root}>
      <Header />
      <div className={styles.content}>
        <BreakPointContextProvider>
          <div className={styles.wrapper}>{props.children}</div>
        </BreakPointContextProvider>
      </div>
    </main>
  );
});

export default GameLayout;
