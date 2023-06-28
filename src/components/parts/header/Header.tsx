import React from "react";

import styles from "./Header.module.css";
import { routes } from "src/common/routes/routes";
import Link from "src/components/elements/link/Link";
import Image from "next/image";

const Header = React.memo(function Header() {
  return (
    <header className={styles.root}>
      <Link className={styles["logo-wrapper"]} href={routes.home.makePath()}>
        <Image
          src="/images/pg-name-logo.png"
          alt="Party Game name logo"
          className={styles.logo}
          width={120}
          height={25}
          loading="eager"
        />
      </Link>
    </header>
  );
});

export default Header;
