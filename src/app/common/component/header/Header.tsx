import React from "react";

import styles from "./style/Header.module.css";
import { routes } from "src/app/common/routes/routes";
import Tab from "src/app/common/component/tab/Tab";
import Link from "src/app/common/component/link/Link";

const Header = React.memo(function Header() {
  return (
    <header className={styles.root}>
      <div className={styles["header-top"]}>
        <Link className={styles.title} href={routes.home.makePath()}>
          Party Games
        </Link>
      </div>
      <div className={styles["header-bottom"]}>
        <Tab />
      </div>
    </header>
  );
});

export default Header;
