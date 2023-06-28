"use client";
import React, { useContext, useMemo } from "react";

import { BreakPointContext } from "src/common/context/BreakPointContext/BreakPointContext";
import { BREAK_POINTS } from "src/common/context/BreakPointContext/types";
import { splitIntoChunk } from "src/common/util/splilitIntoChunk";

type P = {
  items: React.ReactNode[];
};
const Grid = React.memo<P>(function Grid(props) {
  const breakPoint = useContext(BreakPointContext);
  const columnNum = useMemo(() => {
    let columns = 4;
    if (breakPoint === "xs") {
      columns = 1;
    } else if (breakPoint === "sm") {
      columns = 2;
    } else if (breakPoint === "md") {
      columns = 3;
    }
    return columns;
  }, [breakPoint]);

  const chunkedItems = useMemo(
    () => splitIntoChunk(props.items, columnNum),
    [columnNum, props.items]
  );

  return (
    <>
      {chunkedItems.map((chunk) => {
        <div>{chunk}</div>;
      })}
    </>
  );
});

export default Grid;
