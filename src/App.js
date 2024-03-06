import React, { useState } from 'react';
import TrackSelector from './components/TrackSelector';
import Timeline from './components/Timeline';

function App() {
  const [audioTracks, setAudioTracks] = useState([]);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  const addAudioTrack = (audioTrack) => {
    setAudioTracks([...audioTracks, audioTrack]);
  };

  const deleteAudioTrack = (id) => {
    setAudioTracks(audioTracks.filter((track) => track.id !== id));
  };

  const shiftAudioTrack = (id, newPosition) => {
    setAudioTracks(
      audioTracks.map((track) =>
        track.id === id ? { ...track, position: newPosition } : track
      )
    );
  };

  const setPlayback = (newRate) => {
    setPlaybackRate(newRate);
  };

  const setCurrent = (id) => {
    setCurrentTrackId(id);
  };

  const setTime = (time) => {
    setCurrentTime(time);
  };

  return (
    <div className="App">
      <TrackSelector addAudioTrack={addAudioTrack} />
      <Timeline
        audioTracks={audioTracks}
        currentTrackId={currentTrackId}
        currentTime={currentTime}
        playbackRate={playbackRate}
        deleteAudioTrack={deleteAudioTrack}
        shiftAudioTrack={shiftAudioTrack}
        setPlayback={setPlayback}
        setCurrent={setCurrent}
        setTime={setTime}
      />
    </div>
  );
}

export default App;