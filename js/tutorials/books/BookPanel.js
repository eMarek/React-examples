var React = require('react'),
    $ = require('jquery'),
    BookSearchPanel = require('./BookSearchPanel.js'),
    BookTable = require('./BookTable.js'),
    BookForm = require('./BookForm.js');

var BookPanel = React.createClass({
    getInitialState: function() {
        return {
            books: [],
            editingBook: {},
            search: '',
            message: ''
        };
    },
    render: function() {
        return (
            <div className="row">
                <div className="one-half column">
                    <BookSearchPanel
                        search={this.state.search}
                        onSearchChanged={this.onSearchChanged}
                        onClearSearch={this.onClearSearch}
                    ></BookSearchPanel>
                    <BookTable books={this.state.books} handleEditClickPanel={this.handleEditClickPanel}></BookTable>
                </div>
                <div className="one-half column">
                    <BookForm
                        book={this.state.editingBook}
                        message={this.state.message}
                        handleChange={this.handleChange}
                        handleSubmitClick={this.handleSubmitClick}
                        handleCancelClick={this.handleCancelClick}
                        handleDeleteClick={this.handleDeleteClick}
                    ></BookForm>
                </div>
            </div>
        );
    },
    componentDidMount: function() {
        this.reloadBooks('');
    },
    onSearchChanged: function(query) {
        if (this.promise) {
            clearInterval(this.promise)
        }
        this.setState({
            search: query
        });
        this.promise = setTimeout(function () {
            this.reloadBooks(query);
        }.bind(this), 200);
    },
    onClearSearch: function() {
        this.setState({
            search: ''
        });
        this.reloadBooks('');
    },
    handleEditClickPanel: function(id) {
        var book = $.extend({}, this.state.books.filter(function(x) {
            return x._id == id;
        })[0]);

        this.setState({
            editingBook: book,
            message: ''
        });
    },
    handleChange: function(title, category) {
        this.setState({
            editingBook: {
                title: title,
                category: category,
                _id: this.state.editingBook._id
            }
        });
    },
    handleCancelClick: function(e) {
        e.preventDefault();
        this.setState({
            editingBook: {}
        });
    },
    reloadBooks: function(query) {
        var data = {search: query};

        $.post("api/books/books.json", data, function(rsp) {
            this.setState({
                books: rsp.books
            });
        }.bind(this));
    },
    handleSubmitClick: function(e) {
        e.preventDefault();

        var data = this.state.editingBook;

        $.post("api/books/edit-book.json", data, function(rsp) {
            if (rsp.status === 'error') {
                this.setState({
                    message: rsp.message
                });
            } else {
                this.setState({
                    message: rsp.message,
                    editingBook: {}
                });
                this.reloadBooks('');
            }
        }.bind(this));
    },
    handleDeleteClick: function(e) {
        e.preventDefault();

        var data = {_id: this.state.editingBook._id};

        $.post("api/books/delete-book.json", data, function(rsp) {
            if (rsp.status === 'error') {
                this.setState({
                    message: rsp.message
                });
            } else {
                this.setState({
                    message: rsp.message,
                    editingBook: {}
                });
                this.reloadBooks('');
            }
        }.bind(this));
    },
});

// ReactDOM.render(<BookPanel url="api/books/books.json"></BookPanel>, document.getElementById('app'));
module.exports = BookPanel;