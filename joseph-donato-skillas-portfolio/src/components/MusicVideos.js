import React from "react";

const MusicVideos = () => {
  return (
    <div>
      <div className="divHeight display-flex">
        <div className="container">
          <div className="titleBg">
            <h1 className="titleAlign">Music Videos</h1>
          </div>
          <div className="alignVideos">
          <div className="videoMargins div1">
              <iframe
                width="640"
                height="360"
                src="https://player.vimeo.com/video/352382164?h=e8c3623d32"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div2">
              <iframe
                src="https://player.vimeo.com/video/197635749?h=38885583fd"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div3">
              <iframe
                width="640"
                height="360"
                src="https://player.vimeo.com/video/258725361?h=b48047eb09"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div4">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/akIi11_09-Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div5">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/MEu-w3xY0pg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div6">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/XlvmTScGkHY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div7">
              <iframe
                src="https://player.vimeo.com/video/196084268?h=0a7630fc1f"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div8">
              <iframe
                src="https://player.vimeo.com/video/207005174?h=860bd53603"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div9">
              <iframe
                src="https://player.vimeo.com/video/360698726?h=087299592f"
                width="640"
                height="469"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videoMargins div10">
              <iframe
                src="https://player.vimeo.com/video/215427292?h=80547ec184"
                width="640"
                height="470"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <footer>
          <h5 className="footer text-white copyRight cpBg">
            ⓒJoseph Donato Skillas
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default MusicVideos;
