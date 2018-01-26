import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyChatSuh5ihxXHLaAmuvY_OGi9RJS4tTLY";

// Create a new component. This component should produce some HTML
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
};


// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));
