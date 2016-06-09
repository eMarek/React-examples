var React = require('react'),
    _ = require('underscore'),
    ShowAddButton = require('./ShowAddButton.js'),
    FeedForm = require('./FeedForm.js'),
    FeedList = require('./FeedList.js');

var Vote = React.createClass({
    getInitialState: function() {
        var FEED_ITEMS = [
            { key: 1, title: "Realtime Data", description: "Firebase is cool", voteCount: 49 },
            { key: 2, title: "JavaScript is fun", description: "Lexical scoping FTW", voteCount: 34 },
            { key: 3, title: "Coffee makes you awake", description: "Drink responosibly", voteCount: 12 }
        ]
        return {
            items: FEED_ITEMS,
            formDisplayed: false
        };
    },
    onToggleForm: function() {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },
    nextId: function() {
        if (!this.state.items.length) return 0;
        var lastItem = _.max(this.state.items, function(item) {
            return item.key;
        });
        return lastItem.key + 1;
    },
    onNewItem: function(newItem) {
        newItem.key = this.nextId();
        var newItems = this.state.items.concat([newItem]);
        this.setState({
            items: newItems,
            formDisplayed: false,
            key: this.state.items.length
        });
    },
    onVote: function(newItem) {
        var items = this.state.items;
        for (var i in items) {
            if (items[i].key == newItem.key) {
                items[i].voteCount = newItem.voteCount
            }
        }
        this.setState({
            items: items
        });
    },
    render: function() {
        return (
            <div>
                <div className="container">
                    <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
                </div>
                <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />
                <FeedList items={this.state.items} onVote={this.onVote} />
            </div>
        );
    }
});

module.exports = Vote;