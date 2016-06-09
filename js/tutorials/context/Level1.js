var React = require('react'),
    Level2 = require('./Level2.js');

var Level1 = React.createClass({
    getChildContext: function() {
        // it exposes one property "text", any of the components that are rendered inside it will be able to access it
        return {
            text: 'Where is my son?'
        };
    },
    // we declare text is a string
    childContextTypes: {
        text: React.PropTypes.string
    },
    render: function() {
        // no props to pass down
        return  <Level2 />;
    }
});

module.exports = Level1;