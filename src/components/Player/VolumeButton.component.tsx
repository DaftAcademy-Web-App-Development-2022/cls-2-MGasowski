import React from "react";
import styles from "./VolumeButton.module.css";

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";

interface VolumeButtonProps {
  muted: boolean;
  onClick: () => void;
}

const VolumeButton = ({ muted, onClick }: VolumeButtonProps) => {
  return (
    <>
      <div className={styles.root} onClick={onClick}>
        {muted ? <SpeakerXMarkIcon /> : <SpeakerWaveIcon />}
      </div>
    </>
  );
};

export default VolumeButton;
