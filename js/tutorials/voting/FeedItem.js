var React = require('react');

var FeedItem = React.createClass({
    vote: function(newCount) {
        this.props.onVote({
            key: this.props.kei,
            title: this.props.title,
            description: this.props.desc,
            voteCount: newCount
        });
    },
    voteUp: function() {
        var count = parseInt(this.props.voteCount, 10);
        var newCount = count + 1;
        this.vote(newCount);
    },
    voteDown: function() {
        var count = parseInt(this.props.voteCount, 10);
        var newCount = count - 1;
        this.vote(newCount);
    },
    render: function() {
        return (
            <li className="list-group-item" style={{marginBottom: "40px"}}>
                <span className="badge badge-success">{this.props.voteCount}</span>
                <h2>{this.props.title}</h2>
                <h4>{this.props.desc}</h4>
                <span className="pull-right">
                    <button id="up" className="btn btn-sm" onClick={this.voteUp}>UP</button>
                    <button id="down" className="btn btn-sm" onClick={this.voteDown}>DOWN</button>
                </span>
            </li>
        );
    }
});

module.exports = FeedItem;