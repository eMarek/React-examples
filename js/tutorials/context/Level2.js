var React = require('react'),
    Level3 = require('./Level3.js');

var Level2 = React.createClass({
    render: function() {
        // this component has no props
        return <Level3 />;
    }
});

module.exports = Level2;