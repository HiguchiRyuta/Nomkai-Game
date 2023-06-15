"use client";
import React, { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

import styles from "./Nav.module.css";
import { routes } from "../../../common/routes/routes";
import Chip from "src/components/elements/chip/Chip";

const NAV_ITEMS = [
  {
    name: "ホーム",
    path: routes.home.makePath(),
    key: "home",
  },
  {
    name: "おすすめ",
    path: routes.curation.makePath(),
    key: "curation",
  },
];
const Nav = React.memo(function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const getOnClickChip = useCallback(
    (path: string) => {
      return () => {
        router.push(path);
      };
    },
    [router]
  );
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => {
          return (
            <li className={styles.item} key={item.key}>
              <Chip
                text={item.name}
                active={pathname == item.path}
                onClick={getOnClickChip(item.path)}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

export default Nav;
