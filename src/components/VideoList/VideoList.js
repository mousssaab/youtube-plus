import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import { CardColumns } from 'react-bootstrap';

const VideoList = ({videos , handleOnSelect}) => {
    const listVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleOnSelect={handleOnSelect} />
    });

    return <CardColumns>{listVideos}</CardColumns>;
};
export default VideoList;
