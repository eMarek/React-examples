var React = require('react');

var Level3 = React.createClass({
    // we declare we want to read the .text property of the context
    contextTypes: {
        text: React.PropTypes.string
    },
    render: function() {
        // this component has access to the current context exposed by any of its parent
        return <span>{this.context.text}</span>;
    }
});

module.exports = Level3;