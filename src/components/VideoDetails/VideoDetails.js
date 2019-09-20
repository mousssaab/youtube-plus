import React from 'react';
import {
    func,
    bool,
    object
  } from 'prop-types';
import {Modal} from 'react-bootstrap';
import {API_EMBED} from '../../constants';

class VideoDetails extends React.Component {
    static propTypes = {
        video: object,
        isOpen: bool,
        onClose: func
      };

    state = { isOpen: false };

    handleOnClose = () => {
      const { onClose } = this.props;
      this.setState({ isOpen: false }, () => {
        onClose && onClose();
      });
    };

    componentDidMount = () => {
      const { isOpen } = this.props;
      if (isOpen) {
        this.setState({ isOpen });
      }
    };

    componentDidUpdate = prevProps => {
      const { isOpen } = this.props;
      if (prevProps.isOpen !== isOpen && isOpen !== this.state.isOpen) {
        this.setState({ isOpen });
      }
    };

    render() {
        const { video } = this.props;
        const videoSrc = video && `${API_EMBED}${this.props.video.id.videoId}`;

      return (

        video &&
        <Modal variant="dark" show={this.state.isOpen} onHide={this.handleOnClose}>
            <Modal.Header closeButton>
             <Modal.Title>{video.snippet.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <iframe width="100%" height="340" src={videoSrc} title={video.snippet.title} />
            </Modal.Body>
        </Modal>

      );
    }
  }

export default VideoDetails;
