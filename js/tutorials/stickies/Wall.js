var React = require('react'),
    _ = require('underscore'),
    Note = require('./Note.js');

var Wall = React.createClass({
    propTypes: {
        count: function(props, propName) {
            if (!_.has(props, propName)) {
                return new Error('You need to define "count" prop when rendering wall!');
            }
            if (typeof props[propName] !== "number") {
                return new Error('The "count" must be a number!');
            }
            if (props[propName] > 100) {
                return new Error('Creating ' + props[propName] + ' notes is ridiculous!');
            }
        }
    },
    getInitialState: function() {
        var notes = _.map(_.range(this.props.count), function(i) {
            return {
                id: i,
                content: "An Example Note"
            };
        });
        /*
        var notes = [{
            id: 0,
            content: "An Example Note"
        }];
        */
        return {
            notes: notes,
            wallStyle: {
                backgroundColor: "#FBCA3F",
                position: "fixed",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                overflow: "hidden"
            }
        };
    },
    nextId: function() {
        if (!this.state.notes.length) return 0;
        var lastNote = _.max(this.state.notes, function(note) {
            return note.id;
        });
        return lastNote.id + 1;
    },
    add: function(text) {
        var arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            content: text
        });
        this.setState({notes: arr});
    },
    update: function(noteText, i) {
        var arr = this.state.notes;
        arr[i].content = noteText;
        this.setState({notes: arr});
    },
    remove: function(i) {
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },
    eachNote: function(note, i) {
        return (
            <Note key={note.id} index={i} onSave={this.update} onRemove={this.remove}>{note.content}</Note>
        );
    },
    render: function() {
        return (
            <div className="wall" style={this.state.wallStyle}>
                <a href="javascript:;" className="btn-add" style={{display: "block", margin: "20px"}} onClick={this.add.bind(null, "New Note")}>ADD NOTE</a>
                {this.state.notes.map(this.eachNote)}
            </div>
        );
    }
});

module.exports = Wall;