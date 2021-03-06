var React = require('react'),
    FeedItem = require('./FeedItem.js');

var FeedList = React.createClass({
    render: function() {
        var feedItems = this.props.items.map(function(item) {
            return <FeedItem key={item.key}
                             kei={item.key}
                             title={item.title}
                             desc={item.description}
                             voteCount={item.voteCount}
                             onVote={this.props.onVote} />;
        }.bind(this));
        return (
            <ul className="list-group">
                {feedItems}
            </ul>
        );
    }
});

module.exports = FeedList;