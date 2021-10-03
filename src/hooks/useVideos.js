import { useState, useEffect } from "react";
import YouTube from "../API/YouTube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onSearch(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const onSearch = async (term) => {
        const response = await YouTube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response);

        setVideos(response.data.items);
    };

    return [videos, onSearch];
}

export default useVideos;