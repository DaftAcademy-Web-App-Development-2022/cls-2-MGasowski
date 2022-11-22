import React from "react";
import usePlayer from "../../hooks/usePlayer.hook";
import trackData from "../../data/trackData.json";

import styles from "./Player.module.css";
import PlayButton from "./PlayButton.component";
import Timer from "./Timer.component";
import ProgressBar from "./ProgressBar.component";
import VolumeButton from "./VolumeButton.component";

const Player = () => {
  const { state, actions } = usePlayer();
  const handleClick = () =>
    state.playing
      ? actions.pause()
      : actions.play({
          id: trackData.id,
          name: trackData.name,
          src: trackData.preview_url,
          artists: trackData.artists.map((artist) => artist.name),
        });

  const handleVolume = () => {
    actions.mute(state.volume === 0 ? 1 : 0);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className="p-2 ">
          <PlayButton onClick={handleClick} isPlaying={state.playing} />
        </div>
        <div className={styles.progressSection}>
          <div className="pb-2">
            <p>{state.meta?.name ?? "Tytuł"}</p>
          </div>

          <div>
            <ProgressBar progress={state.progress} />
          </div>

          <div className="pt-2">
            {state.meta?.artists?.map((artist) => (
              <p className="text-ui1">{artist}</p>
            )) ?? <p className="text-ui1">Autor</p>}
          </div>
        </div>
        <div className="p-2 ">
          <Timer currentTime={state.currentTime} duration={state.duration} />
        </div>
        <div className="p-2 ">
          <VolumeButton muted={state.volume === 0} onClick={handleVolume} />
        </div>
      </div>
    </div>
  );
};

export default Player;
