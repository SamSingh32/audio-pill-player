import React, { useState, useRef } from 'react';

const AudioTrack = ({ audio, onMove }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleEnded = () => {
    setPlaying(false);
    onMove(audio.id, audio.start, audio.end);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={audio.src}
        onEnded={handleEnded}
        onPlay={handlePlayPause}
        onPause={handlePlayPause}
      />
      <button onClick={handlePlayPause}>Play/Pause</button>
      <button onClick={() => onMove(audio.id, audio.start, audio.end - 1)}>Shift Left</button>
      <button onClick={() => onMove(audio.id, audio.start + 1, audio.end)}>Shift Right</button>
      <div>
        {audio.start} - {audio.end}
      </div>
    </div>
  );
};

export default AudioTrack;