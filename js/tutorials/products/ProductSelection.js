var React = require('react'),
    PubSub = require('pubsub-js');

var ProductSelection = React.createClass({
    getInitialState: function() {
        return {
            selection: 'none'
        };
    },
    componentWillMount: function() {
        // when React renders me, I subscribe to the topic 'PRODUCT_CLICKED'
        // and .subscribe returns a unique token necessary to unsubscribe
        this.pubsub_token = PubSub.subscribe('PRODUCT_CLICKED', function(topic, product) {
            // update my selection when there is a message
            this.setState({
                selection: product
            });
        }.bind(this));
    },
    componentWillUnmount: function() {
        // React removed me from the DOM, I have to unsubscribe from the PubSub using my token
        PubSub.unsubscribe(this.pubsub_token);
    },
    render: function() {
        return (
            <div>You have selected the product: {this.state.selection}</div>
        );
    }
});

module.exports = ProductSelection;