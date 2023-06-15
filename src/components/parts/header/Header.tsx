import React from "react";

import styles from "./Header.module.css";
import { routes } from "src/common/routes/routes";
import Link from "src/components/elements/link/Link";

const Header = React.memo(function Header() {
  return (
    <header className={styles.root}>
      <Link className={styles.title} href={routes.home.makePath()}>
        Party Games
      </Link>
    </header>
  );
});

export default Header;
