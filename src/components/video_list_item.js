import React from 'react';
const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video and having props as the funciton input is the same as defining the input
  // as {video}. this means define a new variable called video which has value equal to props.video
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
///
export default VideoListItem;