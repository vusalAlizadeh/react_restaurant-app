import React, { useRef, useState } from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const videoRef = useRef();
  const [videoPlay, setVideoPlay] = useState(false);

  const handleVideo = () => {
    setVideoPlay(!videoPlay);
    if (videoPlay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={videoRef}
      />

      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay-circle flex__center" onClick={handleVideo}>
          {videoPlay ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );

};

export default Intro;
