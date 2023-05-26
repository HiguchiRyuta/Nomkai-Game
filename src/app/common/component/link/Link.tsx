import React from "react";
import NextLink, { LinkProps } from "next/link";

import styles from "./style/Link.module.css";
import { classnames } from "../../util/classnames";

type P = {
  children?: React.ReactNode;
  className?: string;
  withUnderline?: boolean;
  active?: boolean;
} & LinkProps;
const Link = React.memo<P>(function Link(props) {
  return (
    <NextLink
      {...props}
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
