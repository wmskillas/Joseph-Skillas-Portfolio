import React from "react";

const MusicVideos = () => {
  return (
    <div>
      <div className="divHeight display-flex">
        <div className="container marginBottom">
          <div className="titleBg">
            <h1 className="titleAlign">Music Videos</h1>
          </div>
          <div className="alignVideos">
            <div className="videoMargins div1">
              <iframe
                title="tired in the morning"
                width="640"
                height="360"
                src="https://player.vimeo.com/video/258725361?h=b48047eb09"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div2">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/XmLzOgJbDwM"
                title="I Could Live In Sleep"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div3">
              <iframe
                title="Where You Are"
                width="640"
                height="360"
                src="https://player.vimeo.com/video/352382164?h=e8c3623d32"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div4">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/akIi11_09-Q"
                title="White Paper Ballot"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div5">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/MEu-w3xY0pg"
                title="Venus"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div6">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/XlvmTScGkHY"
                title="Spinach"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div7">
              <iframe
                title="somewhere you've been before"
                src="https://player.vimeo.com/video/196084268?h=0a7630fc1f"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div8">
              <iframe
                title="dream logic"
                src="https://player.vimeo.com/video/207005174?h=860bd53603"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div9">
              <iframe
                title="moon in my hand"
                src="https://player.vimeo.com/video/360698726?h=087299592f"
                width="640"
                height="469"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div10">
              <iframe
                title="the sky is empty"
                src="https://player.vimeo.com/video/215427292?h=80547ec184"
                width="640"
                height="470"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMargins div11" id="centerVideo">
              <iframe
                title="aizu forest"
                src="https://player.vimeo.com/video/197635749?h=38885583fd"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <footer>
          <h5 className="footer text-white copyRight cpBg">
            ???Joseph Donato Skillas
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default MusicVideos;
