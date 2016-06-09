var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    PubSub = require('pubsub-js');

var Sandwich = React.createClass({
    getInitialState: function() {
        return {
            showDropdown: false
        }
    },
    componentWillUnmount: function() {
        this.setState({
            showDropdown: false
        });
    },
    handleLogout: function(e) {
        e.preventDefault;
        PubSub.publish('SESSION_CARE', false);
    },
    handleProfile: function(e) {
        e.preventDefault;
        PubSub.publish('POPUP_OPEN', {
            type: "custom",
           template: "ChangePassword"
        });
        this.setState({
            showDropdown: false
        });
    },
    handleSandwich: function(e) {
        e.preventDefault;
        this.setState({
            showDropdown: !this.state.showDropdown
        });
    },
    renderDropdown: function() {
        if (this.state.showDropdown) {
            return (
                <ul className="sandwich-dropdown">
                    <li><a href="javascript:;" onClick={this.handleProfile}>Profile</a></li>
                    <li><a href="javascript:;" onClick={this.handleLogout}>Logout</a></li>
                </ul>
            );
        } else {
            return;
        }
    },
    render: function() {        
        return (
            <div>
                <a href="javascript:;" className="sandwich-btn" onClick={this.handleSandwich}></a>
                {this.renderDropdown()}
            </div>
        );
    }
});

module.exports = Sandwich;