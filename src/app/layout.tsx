import { ReactNode } from "react";
import Link from "next/link";

import styles from "src/app/common/style/commonStyle.module.css";
import GenericLayout from "src/app/common/layout/generic/GenericLayout";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html>
      <head></head>
      <body className={styles.root}>
        <GenericLayout>{children}</GenericLayout>
      </body>
    </html>
  );
}
