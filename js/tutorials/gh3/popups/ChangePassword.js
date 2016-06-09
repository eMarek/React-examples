var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    PubSub = require('pubsub-js');

var ChangePassword = React.createClass({
    getInitialState: function() {
        return {
            message: ''
        }
    },
    componentWillUnmount: function() {
        this.setState({
            message: ''
        });
    },
    handleUpdate: function(e) {
        e.preventDefault;
        if (e.keyCode && e.keyCode !== 13) {
            return;
        }
        $.ajax({
            url: "api/auth/password-set.json",
            type: "post",
            data: {
                password: this.refs.password.value,
                passwordRepeat: this.refs.passwordRepeat.value,
            },
            headers: {
                "Session": localStorage.getItem("session")
            },
            dataType: "json",
            success: function(rsp) {
                this.setState({
                    message: rsp.message
                });
                if (rsp.status === "ok") {
                    _.delay(function() {
                        PubSub.publish('POPUP_CLOSE', 'ChangePassword');
                    }, 1000);
                }
            }.bind(this)
        });
    },
    handleCancel: function(e) {
        PubSub.publish('POPUP_CLOSE', 'ChangePassword');
    },
    render: function() {        
        return (
            <div>
                <label>
                    <span>Change your password:</span><br />
                    <input type="text" ref="password" onKeyDown={this.handleUpdate} />
                </label>
                <p></p>
                <label>
                    <span>Repeat your password:</span><br />
                    <input type="text" ref="passwordRepeat" onKeyDown={this.handleUpdate} />
                </label>
                <p></p>
                <div>{this.state.message}</div>
                <p>
                    <a href="javascript:;" onClick={this.handleUpdate}>Update</a>&nbsp;
                    <a href="javascript:;" onClick={this.handleCancel}>Cancel</a>
                </p>
            </div>
        );
    }
});

module.exports = ChangePassword;