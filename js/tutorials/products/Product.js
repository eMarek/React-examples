var React = require('react'),
    PubSub = require('pubsub-js');

var Product = React.createClass({
    handleClick: function() {
        PubSub.publish('PRODUCT_CLICKED', this.props.name);
    },
    render: function() {
        return (
            <div onClick={this.handleClick}>{this.props.name}</div>
        );
    }
});

module.exports = Product;