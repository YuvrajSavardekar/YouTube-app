import React from "react";
import VideoItem from "./VideoItem";

// this file is created for list(array) of video item

const VideoList = ({ videos, onVideoSelect }) => {    // we can also pass direct ({ videos, onVideoSelect })
    const renderedList = videos.map( (video) => {
        return (
        <VideoItem 
         key={video.id.videoId} 
         onVideoSelect={onVideoSelect}
         eachVideo={video}
        />
        );
    });

    return <div className="ui relaxed divided list">
        { renderedList }
        </div>
}


export default VideoList;