import { ReactNode } from "react";

import "../../styles/globals.css";
import GenericLayout from "src/app/common/layout/genericLayout/GenericLayout";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        ></link>
      </head>
      <body>
        <GenericLayout>{children}</GenericLayout>
      </body>
    </html>
  );
}
