var React = require('react');

var Note = React.createClass({
    getInitialState: function() {
        return {
            editing: false
        };
    },
    componentWillMount: function() {
        this.style = {
            display: "block",
            padding: "20px",
            border: "1px solid #D9AB29",
            position: "absolute",
            minWidth: "100px",
            minHeight: "100px",
            backgroundColor: "#FFD664",
            left: this.randomBetween(0, window.innerWidth - 150) + 'px',
            top: this.randomBetween(50, window.innerHeight - 150) + 'px',
            transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg)'
        }
    },
    randomBetween: function(min, max) {
        return (min + Math.ceil(Math.random() * max));
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        var val = this.refs.textRef.value;
        this.props.onSave(val, this.props.index);
        this.setState({editing: false});
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function() {
        return (
            <div className="note" style={this.style}>
                <div>{this.props.children}</div>
                <a href="javascript:;" className="btn-edit" onClick={this.edit}>EDIT</a>
                &nbsp;
                <a href="javascript:;" className="btn-remove" onClick={this.remove}>REMOVE</a>
            </div>
        );
    },
    renderForm: function() {
        return (
            <div className="note" style={this.style}>
                <div><textarea ref="textRef" defaultValue={this.props.children} className="form-control"></textarea></div>
                <a href="javascript:;" className="btn-save" onClick={this.save}>SAVE</a>
            </div>
        );

    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderDisplay();
        }
    }
});

module.exports = Note;