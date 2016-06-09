var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    PubSub = require('pubsub-js');

var FillTheName = React.createClass({
    getInitialState: function() {
        return {
            message: '',
            hated: false
        }
    },
    componentWillUnmount: function() {
        this.setState({
            message: '',
            hated: false
        });
    },
    handleSave: function(e) {
        e.preventDefault;
        if (e.keyCode && e.keyCode !== 13) {
            return;
        }
        $.ajax({
            url: "api/users/save-name.json",
            type: "post",
            data: {
                name: this.refs.name.value,
            },
            headers: {
                "Session": localStorage.getItem("session")
            },
            dataType: "json",
            success: function(rsp) {
                if (rsp.status === "ok") {
                    this.setState({
                        message: rsp.message + ' Popup will close in a second.'
                    });
                    _.delay(function() {
                        PubSub.publish('POPUP_CLOSE', 'FillTheName');
                    }, 3500);
                } else {
                    this.setState({
                        message: rsp.message
                    });
                }
            }.bind(this)
        });
    },
    handleHate: function(e) {
        this.setState({
            message: "Sorry but you can't be part of this journey if we don't know at least who you are.",
            hated: true
        });
    },
    handleCancel: function(e) {
        this.setState({
            message: "You will be logged out in few seconds."
        });
        PubSub.publish('SESSION_CARE', false);
        _.delay(function() {
            PubSub.publish('POPUP_CLOSE', 'FillTheName');
        }, 1500);
    },
    render: function() {
        return (
            <div>
                <div>Hey! Marko here, creator of this app.</div>
                <div>Do you mind if I ask you what's your name?</div><br />
                <label>
                    <span>I am:</span><br />
                    <input type="text" ref="name" onKeyDown={this.handleSave} />
                </label>
                <p>
                    <a href="javascript:;" onClick={this.handleSave}>Save</a>&nbsp;
                    <a href="javascript:;" onClick={this.handleHate} className={this.state.hated ? "hidden" : ''}>I hate names</a>
                    <a href="javascript:;" onClick={this.handleCancel} className={this.state.hated ? '' : "hidden"}>Cancel</a>
                </p>
                <div>{this.state.message}</div>
            </div>
        );
    }
});

module.exports = FillTheName;