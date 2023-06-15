import React from "react";
import GenericLayout from "src/components/layouts/genericLayout/GenericLayout";

const HomeLayout = React.memo(function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GenericLayout>{children}</GenericLayout>;
});

export default HomeLayout;
