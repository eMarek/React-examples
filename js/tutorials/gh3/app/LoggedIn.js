var React = require('react'),
    _ = require('underscore'),
    Hallway = require('../boards/Hallway.js'),
    Chamber = require('../boards/Chamber.js');

const IN_BOARDS = {
    "hallway": "Hallway",
    "chamber": "Chamber"
}

var Board = React.createClass({
    getDefaultProps: function() {
        return {
            inBoard: "hallway"
        };
    },
    propTypes: {
        inBoard: function(props, propName) {
            var currentInBoard = props[propName];
            if (!_.has(props, propName)) {
                return new Error("You need to define " + propName + " property when rendering LoggedIn component!");
            }
            if (typeof currentInBoard !== "string") {
                return new Error("The " + propName + " property must be a string in LoggedIn component!");
            }
            if (!_.has(IN_BOARDS, currentInBoard)) {
                return new Error("Current '" + currentInBoard + "' board is not an available " + propName + "!");
            }
        }
    },
    render: function() {
        switch (this.props.inBoard) {
            case 'hallway':
                return (
                    <Hallway />
                );
                break;
            case 'chamber':
                return (
                    <Chamber />
                );
                break;
        }
    }
});

module.exports = Board;