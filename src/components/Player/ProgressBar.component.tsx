import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className={styles.root}>
      <div
        className={styles.progress}
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
