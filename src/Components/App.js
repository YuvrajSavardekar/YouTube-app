import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../API/YouTube";
import VideoList from "./VideoList";
import SelectedVideo from "./SelectedVideo";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [videos, onSearch] = useVideos('Shershaah');

    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar onTextSearch={onSearch}/>
            <div className="ui grid">
                <div className="ui row">

                    <div className="eleven wide column">
                        <SelectedVideo video={selectedVideo} />
                    </div>

                    <div className="five wide column">
                        <VideoList onVideoSelect={(video) => setSelectedVideo(video)}
                            videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;