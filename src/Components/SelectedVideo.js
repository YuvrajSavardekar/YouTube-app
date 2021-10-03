import React from "react";

const selectedVideo = ( { video }) => {
    if(!video) {      // means video == null because we initialy set it to null
        return <div></div>
    }

    // we can only get videoId followed by "https://www.youtube.com/embed/" 
    // so we give write baseURL and "videoId" of that video
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        // "ui embed" is special className which tells we gonna have video here and
        // adds some CSS styling to video
    <div>
        <div className="ui embed">
            <iframe src={videoSrc} />
        </div>
        <div className="ui segment">
            <h4 className="ui header">{ video.snippet.title } </h4>
            <p>{ video.snippet.description }</p>
        </div>
    </div>)
};


export default selectedVideo;