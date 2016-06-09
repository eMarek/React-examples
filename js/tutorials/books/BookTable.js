var React = require('react'),
    BookTableRow = require('./BookTableRow.js');

var BookTable = React.createClass({
    render: function() {
        var rows = [];

        this.props.books.forEach(function(book) {
            rows.push(<BookTableRow key={book._id} book={book} handleEditClickPanel={this.props.handleEditClickPanel}  />);
        }.bind(this));

        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

module.exports = BookTable;