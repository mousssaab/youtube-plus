import React from 'react';
import VideoList from './components/VideoList/VideoList';
import VideoDetails from './components/VideoDetails/VideoDetails';
import apiYoutube from './services/apiYoutube';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
        isOpen: false
    }

    handleOnSubmit = async (query) => {
        const response = await apiYoutube.get('/search', {
            params: {
                q: query
            }
        })
        this.setState({
            videos: response.data.items
        })
    };

    handleOnClickVideo = (video) => {
        this.setState({selectedVideo: video, isOpen: Date.now()})
    }

    handleOnClose = () => {
        this.setState({ isOpen: false });
      };

    render() {
        return (
            <>
                <SearchBar handleFormOnSubmit={this.handleOnSubmit}/>
                <hr/>
                <VideoList handleOnSelect={this.handleOnClickVideo} videos={this.state.videos}/>       
                <VideoDetails video={this.state.selectedVideo} isOpen={this.state.isOpen} onClose={this.onClose}/>
            </>
        )
    }
}

export default App;
