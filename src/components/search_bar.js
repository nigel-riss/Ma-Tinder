// import React Component from "react";
import React, { Component } from "react";

// class SearchBar extends React.Component {
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "Starting value" };
    }

    render() {
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange = {event => this.setState({ term: event.target.value })} 
                />
            </div>
        )
    }

    // onInputChange(event) {
    //     console.dir(event.target.value);
    // }
}

export default SearchBar;