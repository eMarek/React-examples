import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';

const API_KEY = 'AIzaSyBail**********pYVYvdieKoDl0sg';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("faded");
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            // this.setState({ videos });
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
        return (
            <div>
                <span>YouTube Search:</span>
                <SearchBar onSearchTermChange={videoSearch}/>
                <hr />
                <VideoDetail video={this.state.selectedVideo} />
                <hr />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    /*
                    onVideoSelect={
                        function(selectedVideo) {
                            this.setState({
                                selectedVideo: selectedVideo
                            })
                        }.bind(this)
                    }
                    */
                    videos={this.state.videos} />
            </div>
        );
    }
};

export default Index;