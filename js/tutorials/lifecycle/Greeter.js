var React = require('react'),
    Greeting = require('./Greeting.js');

var Greeter = React.createClass({
    getInitialState: function() {
        return {
            name: "Bruca Wayne"
        };
    },
    render: function() {
        return (
            <div>
                <Greeting>{this.props.type} {this.state.name}</Greeting>
                <input type="text" ref="inputField" />
                <button onClick={this.handleGreet}>Greet!</button>
            </div>
        );
    },
    handleGreet: function() {
        alert("handleGreet");
        this.setState({
            name: this.refs.inputField.value
        });
    },
    componentWillMount: function() {
        alert("componentWillMount");
    },
    componentDidMount: function() {
        alert("componentDidMount");
    },
    componentWillReceiveProps: function(nextProps) {
        alert("componentWillReceiveProps");
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
        alert("shouldComponentUpdate");
        return nextState.name != this.state.name;
    },
    componentWillUpdate: function(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
        alert("componentWillUpdate");
    },
    componentDidUpdate: function(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
        alert("componentDidUpdate");
    },
});

module.exports = Greeter;