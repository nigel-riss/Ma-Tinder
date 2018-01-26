import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyChatSuh5ihxXHLaAmuvY_OGi9RJS4tTLY";


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: []
        };
        
        YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
            // this.setState({ videos: videos }); ES6 lower
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector(".container"));
