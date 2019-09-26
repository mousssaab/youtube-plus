import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { func, object } from 'prop-types';
import classNames from 'classnames';
import './VideoItem.css';

export default class VideoItem extends Component {
  static propTypes = {
    video: object,
    handleOnSelect: func,
    onClose: func
  };

  state = { isHovered: false, Result: 'div' };

  handleOnEnter = () => {
    this.setState({ isHovered: true });
  };

  handleOnLeave = () => {
    this.setState({ isHovered: false });
  };

  handleOnSelect = () => {
    const { handleOnSelect, video } = this.props;
    handleOnSelect && handleOnSelect(video);
  };

  render() {
    const { video } = this.props;
    const { isHovered } = this.state;

    return (
      <Card
        onClick={() => this.handleOnSelect(video)}
        className={classNames('video', {
          item: isHovered
        })}
        onMouseEnter={this.handleOnEnter}
        onMouseLeave={this.handleOnLeave}
      >
        <Card.Img
          variant="top"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <Card.Body>
          <Card.Title>{video.snippet.title.substring(0, 15)}</Card.Title>
          <Card.Text>{video.snippet.description.substring(0, 200)}</Card.Text>
          <Button variant="primary">Whatch</Button>
        </Card.Body>
      </Card>
    );
  }
}
