var React = require('react');

var Greeting = React.createClass({
    render: function() {
        return <h1 style={{color: 'red'}}>{this.props.children}</h1>;
    }
});

module.exports = Greeting;