var React = require('react');

var BookForm = React.createClass({
    render: function() {
        var submitBtnText = this.props.book._id ? "Save (id = " + this.props.book._id + ")" : "Add new book";
        return (
            <form onSubmit={this.props.handleSubmitClick}>
                <label forHtml="title">Title</label>
                <input ref="title" name="title" type="text" value={this.props.book.title} onChange={this.onChange}/>
                <label forHtml="category">Category</label>
                <select ref="category" name="category" value={this.props.book.category} onChange={this.onChange} >
                    <option value="CRIME" >Crime</option>
                    <option value="HISTORY">History</option>
                    <option value="HORROR">Horror</option>
                    <option value="SCIFI">SciFi</option>
                </select>
                <br />
                <input type="submit" value={submitBtnText} />
                {this.props.book._id?<button onClick={this.props.handleDeleteClick}>Delete</button>:null}
                {this.props.book._id?<button onClick={this.props.handleCancelClick}>Cancel</button>:null}
                {this.props.message?<div>{this.props.message}</div>:null}
            </form>
        );
    },
    onChange: function() {
        var title = this.refs.title.value;
        var category = this.refs.category.value;
        this.props.handleChange(title, category);
    }
});

module.exports = BookForm;