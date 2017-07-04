'use strict';
// Create a new component 
// This component should produce some HTML 

// Take this component's generated html and put it on the page(DOM)

// Find the react module and assign it to React
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// import youtube-api-key from 'youtube-api-key';
const API_KEY = 'AIzaSyBuFM9ZOyY2AlX2l7KYDEvZ4TlKlaKyq7I';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('Why Programming')
    };
    videoSearch(search) {
        YTSearch({ key: API_KEY, term: search }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });

    }
    render() {
    	const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000) 
        return ( <div> 
        	<SearchBar onSearch = { videoSearch}/>
        	 <VideoDetail video = { this.state.selectedVideo }/> 
        	 <VideoList onVideoSelected = { selectedVideo => this.setState({ selectedVideo }) }
            videos = { this.state.videos }
            /> 
            </div>
        )
    }
};



// First argument is the html we want to render
// Second argument is where on the DOM we want to display the class
ReactDOM.render( < App / > , document.querySelector('.container'));
