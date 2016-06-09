var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore');

var PasswordReset = React.createClass({
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
    handlePasswordReset: function(e) {
        e.preventDefault;
        if (e.keyCode && e.keyCode !== 13) {
            return;
        }
        $.ajax({
            url: "api/auth/password-reset.json",
            type: "post",
            data: {
                phone: this.refs.phone.value
            },
            dataType: "json",
            success: function(rsp) {
                this.setState({
                    message: rsp.message
                });
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
                        <input type="text" placeholder="phone" ref="phone" defaultValue={this.props.phone} onKeyDown={this.handlePasswordReset} onKeyUp={this.updatePhone} />
                    </label>
                </div>
                <p></p>
                <button className="password-reset-btn" onClick={this.handlePasswordReset}>Reset</button>
                <p></p>
                <div>{this.state.message}</div>
            </div>
        );
    }
});

module.exports = PasswordReset;