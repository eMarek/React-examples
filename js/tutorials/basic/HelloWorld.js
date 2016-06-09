var React = require('react');

var HelloWorld = React.createClass({
    getDefaultProps: function() {
        return {
            text: 'Hello World!'
        };
    },
    render: function() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
});

module.exports = HelloWorld;