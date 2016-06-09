var React = require('react'),
    SubMessage = require('./SubMessage.js');

var MessageBox = React.createClass({
    getInitialState: function() {
        return {
            isVisible: true,
            titleMessage: "Hello World",
            messages: [
                "I like the World",
                "Coffee flavord ice is highly underrated",
                "My spoon is to big",
                "Tuesday is coming. Did you bring your coat?",
                "I am a banana"
            ]
        };
    },
    handleAdd: function(e) {
        var newMsg = this.refs.newMsg.value;
        var newsMesages = this.state.messages.concat([newMsg]);
        this.setState({
            messages: newsMesages
        });
    },
    deleteMessage: function(msg) {
        var mesages = this.state.messages;
        var index = mesages.indexOf(msg);
        if (index > -1) {
            mesages.splice(index, 1);
        }
        this.setState({
            messages: mesages
        });
    },
    render: function() {

        var inlineStyles = {
            display: this.state.isVisible ? 'block' : 'none'
        }

        var subMessages = this.state.messages.map(function(msg, i) {
            return <SubMessage key={i} message={msg} onDelete={this.deleteMessage}></SubMessage>;
        }.bind(this));

        return (
            <div className="container" style={inlineStyles}>
                <h1>{this.state.titleMessage}</h1>
                <input type="text" ref="newMsg" />
                <button onClick={this.handleAdd}>Add</button>
                <div>{subMessages}</div>
            </div>
        );
    }
});

module.exports = MessageBox;