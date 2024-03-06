import React, { useState } from 'react';
import AudioTrack from './AudioTrack';

const App = () => {
  const [audioFiles, setAudioFiles] = useState([
    { id: 1, src: 'audio1.mp3', start: 0, end: 10 },
    { id: 2, src: 'audio2.mp3', start: 10, end: 20 },
    { id: 3, src: 'audio3.mp3', start: 20, end: 30 },
  ]);

  const handleMove = (id, start, end) => {
    setAudioFiles(
      audioFiles.map((audio) => {
        if (audio.id === id) {
          return { ...audio, start, end };
        }
        if (audio.start >= end) {
          return { ...audio, start: audio.start + 1 };
        }
        if (audio.end > start) {
          return { ...audio, end: audio.end + 1 };
        }
        return audio;
      })
    );
  };

  return (
    <div>
      {audioFiles.map((audio) => (
        <AudioTrack key={audio.id} audio={audio} onMove={handleMove} />
      ))}
    </div>
  );
};

export default App;