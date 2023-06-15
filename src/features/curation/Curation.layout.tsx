import React from "react";
import GenericLayout from "src/components/layouts/genericLayout/GenericLayout";

const CurationLayout = React.memo(function CurationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GenericLayout>{children}</GenericLayout>;
});

export default CurationLayout;
