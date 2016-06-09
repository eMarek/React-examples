var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    PubSub = require('pubsub-js');

var Login = React.createClass({
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
    handleLogin: function(e) {
        e.preventDefault;
        if (e.keyCode && e.keyCode !== 13) {
            return;
        }
        $.ajax({
            url: "api/auth/login.json",
            type: "post",
            data: {
                phone: this.refs.phone.value,
                password: this.refs.password.value
            },
            dataType: "json",
            success: function(rsp) {
                this.setState({
                    message: rsp.message
                });
                if (rsp.status === "ok") {
                    _.delay(function(session) {
                        PubSub.publish('SESSION_CARE', session);
                    }.bind(this), 500, rsp.session);
                }
            }.bind(this)
        });
    },
    updatePhone: function(e) {
        this.props.updatePhone(this.refs.phone.value);
    },
    render: function() {
        return (
            <div>
                <div>
                    <label>
                        <span>Phone</span><br />
                        <input type="text" placeholder="phone" ref="phone" defaultValue={this.props.phone} onKeyDown={this.handleLogin} onKeyUp={this.updatePhone} />
                    </label>
                </div>
                <p></p>
                <div>
                    <label>
                        <span>Password</span><br />
                        <input type="text" placeholder="password" ref="password" onKeyDown={this.handleLogin} />
                    </label>
                </div>
                <p></p>
                <button className="login-btn" onClick={this.handleLogin}>Login</button>
                <p></p>
                <div>{this.state.message}</div>
            </div>
        );
    }
});

module.exports = Login;