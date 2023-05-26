import React from "react";
import Header from "../../component/header/Header";
import { BreakPointContextProvider } from "../../context/BreakPointContext/BreakPointContext";

import styles from "./style/GenericLayout.module.css";

type P = {
  children: React.ReactNode;
};

const GenericLayout = React.memo(function GenericLayout(props: P) {
  return (
    <main className={styles.root}>
      <Header />
      <BreakPointContextProvider>
        <div className={styles.wrapper}>{props.children}</div>
      </BreakPointContextProvider>
    </main>
  );
});

export default GenericLayout;
