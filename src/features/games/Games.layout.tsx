import React from "react";
import GameLayout from "src/app/games/layout";

const GamesLayout = React.memo(function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GameLayout>{children}</GameLayout>;
});

export default GamesLayout;
