var React = require('react'),
    _ = require('underscore'),
    Entrance = require('../boards/Entrance.js');

const OUT_BOARDS = {
    "entrance": "Entrance"
}

var LoggedOut = React.createClass({
    getDefaultProps: function() {
        return {
            outBoard: "entrance"
        };
    },
    propTypes: {
        outBoard: function(props, propName) {
            var currentOutBoard = props[propName];
            if (!_.has(props, propName)) {
                return new Error("You need to define " + propName + " property when rendering LoggedOut component!");
            }
            if (typeof currentOutBoard !== "string") {
                return new Error("The " + propName + " property must be a string in LoggedOut component!");
            }
            if (!_.has(OUT_BOARDS, currentOutBoard)) {
                return new Error("Current '" + currentOutBoard + "' board is not an available " + propName + "!");
            }
        }
    },
    render: function() {
        switch (this.props.outBoard) {
            case 'entrance':
                return (
                    <Entrance />
                );
                break;
        }
    }
});

module.exports = LoggedOut;