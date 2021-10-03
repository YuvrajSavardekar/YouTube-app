import './VideoItem.css'
import React from "react";

// this file is for each video item

const VideoItem = ({ eachVideo, onVideoSelect }) => {
    return (
    <div onClick={() => onVideoSelect(eachVideo) } className="video-item item">
        <img className="ui image"
        src={eachVideo.snippet.thumbnails.medium.url} 
        alt={eachVideo.snippet.title}/>
        <div className="content">
        <div className="header">{eachVideo.snippet.title}</div>
        </div>
    </div>
    );
};

export default VideoItem;