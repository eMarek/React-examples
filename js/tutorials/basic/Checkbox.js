var React = require('react'),
    HelloWorld = require('./HelloWorld.js');

var CheckBox = React.createClass({
    getInitialState: function() {
        return {
            checked: false
        };
    },
    handleCheck: function() {
        this.setState({checked: !this.state.checked});
    },
    render: function() {
        var msg;
        if (this.state.checked) {
            msg = "CHECKED";
        } else {
            msg = "UNCHECKED";
        }
        return (
            <div>
                <div>
                    <HelloWorld text="Hello World">This is a general hello...</HelloWorld>
                    <HelloWorld text="Hello node.js people">Do you like <b>server side JS</b>?</HelloWorld>
                    <HelloWorld text="Hello React.js people">Do you like <b>SPA aplications</b>?</HelloWorld>
                </div>
                <br /><br /><br />
                <h2>Nevermind, just click the checkbox!</h2>
                <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
                <p>This box is {msg}.</p>
            </div>
        );
    }
});

module.exports = CheckBox;