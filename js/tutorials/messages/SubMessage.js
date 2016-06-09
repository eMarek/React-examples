var React = require('react');

var SubMessage = React.createClass({
    propTypes: {
        message: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {
            message: "It's good to see you!"
        };
    },
    handleDelete: function(e) {
        this.props.onDelete(this.props.message);
    },
    render: function() {
        return (
            <div>
                <button onClick={this.handleDelete}>X</button>
                <span> {this.props.message}</span>
            </div>
        );
    }
});

module.exports = SubMessage;