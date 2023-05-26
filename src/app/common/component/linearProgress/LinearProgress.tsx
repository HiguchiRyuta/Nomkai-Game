import React from "react";
import { LinearProgress as MuiLinearProgress } from "@mui/material";

import styles from "./style/LinearProgress.module.css";

const LinearProgress = () => {
  return (
    <div>
      <MuiLinearProgress className={styles.root} />
    </div>
  );
};

export default LinearProgress;
