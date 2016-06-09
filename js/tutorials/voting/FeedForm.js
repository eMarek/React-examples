var React = require('react');

var FeedForm = React.createClass({
    handleForm: function(e) {
        e.preventDefault();

        var newItem = {
            title: this.refs.title.value,
            description: this.refs.desc.value,
            voteCount: 0
        }

        this.refs.feedForm.reset();

        this.props.onNewItem(newItem);
    },
    render: function() {
        var styles = {
            display: this.props.displayed ? 'block' : 'none'
        }
        return (
            <form ref="feedForm" style={styles} id="feedForm" className="container" onSubmit={this.handleForm}>
                <div className="form-group">
                    <input ref="title" type="text" className="form-control" placeholder="Title" />
                    <input ref="desc" type="text" className="form-control" placeholder="Description" />
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        );
    }
});

module.exports = FeedForm;