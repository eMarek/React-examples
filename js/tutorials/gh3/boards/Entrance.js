var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    Login = require('../auth/Login.js'),
    PasswordReset = require('../auth/PasswordReset.js'),
    Register = require('../auth/Register.js');

var Entrance = React.createClass({
    getInitialState: function() {
        return {
            menu: 'login',
            phone: ''
        }
    },
    toggleMenu: function(e) {
        e.preventDefault;
        var menu = $(e.target).data("menu");

        this.setState({
            menu: menu
        });
    },
    updatePhone: function(phone) {
        this.setState({
            phone: phone
        });
    },
    renderView: function() {
        switch (this.state.menu) {
            case 'login':
                return (
                    <Login phone={this.state.phone} updatePhone={this.updatePhone} />
                );
                break;
            case 'reset-password':
                return (
                    <PasswordReset phone={this.state.phone} updatePhone={this.updatePhone} />
                );
                break;
            case 'register':
                return (
                    <Register phone={this.state.phone} updatePhone={this.updatePhone} />
                );
                break;
        }
    },
    render: function() {
        return (
            <div>
                <p>
                    <a href="javascript:;" onClick={this.toggleMenu} data-menu="login">Login</a>&nbsp;&nbsp;&nbsp;
                    <a href="javascript:;" onClick={this.toggleMenu} data-menu="reset-password">Reset Password</a>&nbsp;&nbsp;&nbsp;
                    <a href="javascript:;" onClick={this.toggleMenu} data-menu="register">Register</a>
                </p>
                <div>{this.renderView()}</div>
            </div>
        );
    }
});

module.exports = Entrance;