var React = require('react');

var BookTableRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.category}</td>
                <td><a href="javascript:;" onClick={this.onClick}>Edit</a></td>
            </tr>
        );
    },
    onClick: function() {
        this.props.handleEditClickPanel(this.props.book._id);
    }
});

module.exports = BookTableRow;