"use client";
import React from "react";
import { usePathname } from "next/navigation";

import styles from "./style/Tab.module.css";
import Link from "src/app/common/component/link/Link";
import { routes } from "../../routes/routes";

const TAB_ITEMS = [
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
const Tab = React.memo(function Tab() {
  const pathname = usePathname();
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {TAB_ITEMS.map((item) => {
          return (
            <li className={styles.item} key={item.key}>
              <Link href={item.path} active={pathname == item.path}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

export default Tab;
