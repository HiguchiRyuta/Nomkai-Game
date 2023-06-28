import React from "react";

import styles from "./Card.module.css";
import { classnames } from "../../../common/util/classnames";
import Image from "next/image";

type P = {
  className?: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const Card = React.memo<P>(function Card(props) {
  return (
    <div
      onClick={props.onClick}
      className={classnames(styles.root, props.className, {
        [styles.clickable]: !!props.onClick,
      })}
    >
      <Image
        src={props.thumbnailUrl}
        alt={`${props.title} thumbnail image`}
        width={350}
        height={200}
      />
      {props.title}
      {props.description}
    </div>
  );
});

export default Card;
