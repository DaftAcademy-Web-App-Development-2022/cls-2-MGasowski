import React from "react";
import styles from "./PlayButton.module.css";

import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

const PlayButton = ({ onClick, isPlaying }: PlayButtonProps) => {
  return (
    <div className={styles.root} onClick={onClick}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </div>
  );
};

export default PlayButton;
