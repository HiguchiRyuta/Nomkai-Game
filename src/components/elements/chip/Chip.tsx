import React from "react";
import NextLink, { LinkProps } from "next/link";

import styles from "./Chip.module.css";
import { classnames } from "../../../common/util/classnames";

type P = {
  className?: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  text?: string;
};
const Chip = React.memo<P>(function Chip(props) {
  return (
    <div
      onClick={props.onClick}
      className={classnames(styles.root, props.className, {
        [styles.clickable]: !!props.onClick,
        [styles.active]: props.active,
      })}
    >
      <span className={styles.text}>{props.text}</span>
    </div>
  );
});

export default Chip;
