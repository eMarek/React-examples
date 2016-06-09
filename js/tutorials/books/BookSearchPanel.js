var React = require('react');

var BookSearchPanel = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="one-fourth column">
                    Filter: &nbsp;
                    <input ref="search" type="text" value={this.props.search} onChange={this.onSearchChanged} />
                    {this.props.search?<button onClick={this.props.onClearSearch}>x</button>:null}
                </div>
            </div>
        );
    },
    onSearchChanged: function() {
        var query = this.refs.search.value;
        this.props.onSearchChanged(query);
    }
});

module.exports = BookSearchPanel;