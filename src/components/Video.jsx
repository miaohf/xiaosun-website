import $ from "jquery";
import React, { useEffect } from "react";

const Video = () => {
  useEffect(() => {
    // Youtube
    var $ytvideoTrigger = $(".ytplay_btn");
    $ytvideoTrigger.on("click", function (evt) {
      $(".ytube_video").addClass("play");
      $("#ytvideo")[0].src += "?autoplay=1";
    });
  }, []);
  return (
    <div className="container">
      <div className="video_post">
        <div className="ytube_video">
          {/* <iframe
            id="ytvideo"
            src="https://www.youtube.com/embed/fEErySYqItI"
            allow="autoplay;"
            allowfullscreen
          ></iframe>
          <div className="post_content">
            <div className="ytplay_btn">
              <i className="bi bi-play-fill"></i>
            </div>
            <img src="images/bg/video_bg.jpg" alt="video" />
          </div> */}
          <video
            src="../videos/demo_video.mp4"
            poster="../videos/demo_video.jpg"
            width="750"
            height="500"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
