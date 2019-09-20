import React from 'react';
import { Card, Button} from 'react-bootstrap';

const VideoItem = ({video , handleOnSelect}) => {
    return (
        <Card onClick={ () => handleOnSelect(video)} >
            <Card.Img variant="top"
             src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <Card.Body>
                <Card.Title>{video.snippet.title.substring(0,40)}</Card.Title>
                <Card.Text>
                {video.snippet.description.substring(0,200)}
                </Card.Text>
                <Button variant="primary">Whatch</Button>
            </Card.Body>
        </Card>
    )
};
export default VideoItem;
