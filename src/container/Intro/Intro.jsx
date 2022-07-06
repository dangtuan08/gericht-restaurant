import React, { useRef, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handleClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="app_video">
      <div className="app__video-content"></div>
      <video src={meal} ref={videoRef} type="video/mp4" loop></video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay-playbtn flex__center"
          onClick={handleClick}
        >
          {isPlaying ? (
            <BsPauseFill color="#fff" size={"30px"} />
          ) : (
            <BsPlayFill color="#fff" size={"30px"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
