import { ReactNode } from "react";

import "../styles/globals.css";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <title>Party Games</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
