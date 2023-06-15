import React from "react";
import NextLink from "next/link";

import styles from "./Link.module.css";
import { classnames } from "../../../common/util/classnames";

type P = {
  children?: React.ReactNode;
  className?: string;
  withUnderline?: boolean;
  active?: boolean;
  href: string;
};
const Link = React.memo<P>(function Link(props) {
  return (
    <NextLink
      href={props.href}
      className={classnames(styles.root, props.className, {
        [styles.underline]: props.withUnderline,
        [styles.active]: props.active,
      })}
    >
      {props.children}
    </NextLink>
  );
});

export default Link;
