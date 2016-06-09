var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    PubSub = require('pubsub-js');

var RegistationDoubleCheck = React.createClass({
    getInitialState: function() {
        return {
            message: '',
            status: 'normal'
        }
    },
    componentWillUnmount: function() {
        this.setState({
            message: '',
            status: 'normal'
        });
    },
    handleRegistrationConfirmation: function(e) {
        e.preventDefault;
        if (e.keyCode && e.keyCode !== 13) {
            return;
        }
        this.setState({
            status: 'ajax'
        });
        $.ajax({
            url: "api/auth/register.json",
            type: "post",
            data: _.extend(this.props.popupData, {
                doublecheck: 1
            }),
            dataType: "json",
            success: function(rsp) {
                if (rsp.status === "error") {
                    this.setState({
                        message: "Something went wrong. Popup will close and then please try again.",
                        status: 'normal'
                    });
                    _.delay(function() {
                        PubSub.publish('POPUP_CLOSE', 'RegistationDoubleCheck');
                    }.bind(this), 3000);
                } else {
                    this.setState({
                        message: rsp.message,
                        status: 'success'
                    });
                }
            }.bind(this)
        });
    },
    handleCancel: function(e) {
        PubSub.publish('POPUP_CLOSE', 'RegistationDoubleCheck');
    },
    handleClose: function(e) {
        PubSub.publish('POPUP_CLOSE', 'RegistationDoubleCheck');
    },
    renderButtons: function() {
        switch (this.state.status) {
            case 'normal':
                return (
                    <p>
                        <a href="javascript:;" onClick={this.handleRegistrationConfirmation}>Looks okay</a>&nbsp;
                        <a href="javascript:;" onClick={this.handleCancel}>Cancel</a>
                    </p>
                );
                break;
            case 'ajax':
                return (
                    <p>Registration in progress...</p>
                );
                break;
            case 'success':
                return (
                    <p>
                        <a href="javascript:;" onClick={this.handleClose}>Close</a>
                    </p>
                );
                break;
        }
    },
    render: function() {
        return (
            <div>
                <div>We are about to accept you into our system. Please double check your phone number once again. We will send you a welcome text message to this phone number:</div>
                <p></p>
                <h2>{this.props.popupData.phoneSMS}</h2>
                <div>{this.renderButtons()}</div>
                <div>{this.state.message}</div>
            </div>
        );
    }
});

module.exports = RegistationDoubleCheck;