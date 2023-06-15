import React from "react";

import Nav from "src/components/parts/nav/Nav";
import Header from "src/components/parts/header/Header";

import styles from "./GenericLayout.module.css";
import { BreakPointContextProvider } from "src/common/context/BreakPointContext/BreakPointContext";

type P = {
  children: React.ReactNode;
};

const GenericLayout = React.memo(function GenericLayout(props: P) {
  return (
    <main className={styles.root}>
      <Header />
      <div className={styles.content}>
        <BreakPointContextProvider>
          <Nav />
          <div className={styles.wrapper}>{props.children}</div>
        </BreakPointContextProvider>
      </div>
    </main>
  );
});

export default GenericLayout;
