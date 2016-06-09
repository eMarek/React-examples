import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        /*
        const App = () => {
            return <div>Hi there ES6!</div>
        }
        */
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                {/*<div>{this.state.term}</div>*/}
            </div>
        );
    }
}

export default SearchBar;