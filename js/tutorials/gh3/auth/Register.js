var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    PubSub = require('pubsub-js');

var Register = React.createClass({
    getInitialState: function() {
        return {
            message: '',
            areaCodes: []
        }
    },
    componentWillMount: function() {
        this.token_POPUP_CLOSE = PubSub.subscribe('POPUP_CLOSE', this.popupClose);
    },
    componentWillUnmount: function() {
        this.setState({
            message: ''
        });
        PubSub.unsubscribe(this.token_POPUP_CLOSE);
    },
    componentDidMount: function() {
        $.ajax({
            url: "api/area-codes/area-codes.json",
            type: "post",
            dataType: "json",
            success: function(rsp) {
                if (rsp.status === "ok") {
                    
                    this.setState({
                        areaCodes: rsp.areaCodes
                    });
                    
                }
            }.bind(this)
        });
    },
    popupClose: function(topic, popup) {
        if (popup === "RegistationDoubleCheck") {
            this.setState({
                message: ''
            });
        }
    },
    handleRegistration: function(e) {
        e.preventDefault;
        if (e.keyCode && e.keyCode !== 13) {
            return;
        }
        var data = {
            code: this.refs.areacode.value,
            phone: this.refs.phone.value,
            password: this.refs.password.value
        }
        $.ajax({
            url: "api/auth/register.json",
            type: "post",
            data: data,
            dataType: "json",
            success: function(rsp) {
                this.setState({
                    message: rsp.message
                });
                if (rsp.status === "error" && rsp.error === "doublecheck") {
                    PubSub.publish('POPUP_OPEN', {
                        type: "custom",
                        template: "RegistrationDoubleCheck",
                        data: _.extend(data, rsp.data)
                    });
                }
                if (rsp.status === "ok") {
                    _.delay(function(session) {
                        this.props.userLogin(session);
                    }.bind(this), 500, rsp.session);
                }
            }.bind(this)
        });
    },
    updatePhone: function(e) {
        this.props.updatePhone(this.refs.phone.value);
    },
    renderAreaOption: function(ac) {
        return (
            <option key={ac._id} value={ac.code}>{ac.title}</option>
        );
    },
    render: function() {
        return (
            <div>
                <div>
                    <label>
                        <span>Select area</span><br />
                        <select ref="areacode">
                            {_.isEmpty(this.state.areaCodes) ? (<option>Loading...</option>) : this.state.areaCodes.map(this.renderAreaOption)}
                        </select>
                    </label>
                </div>
                <p></p>
                <div>
                    <label>
                        <span>Phone</span><br />
                        <input type="text" placeholder="phone" ref="phone" defaultValue={this.props.phone} onKeyDown={this.handleRegistration} onKeyUp={this.updatePhone} />
                    </label>
                </div>
                <p></p>
                <div>
                    <label>
                        <span>Password</span><br />
                        <input type="text" placeholder="password" ref="password" onKeyDown={this.handleRegistration} />
                    </label>
                </div>
                <p></p>
                <button className="login-btn" onClick={this.handleRegistration}>Register</button>
                <p></p>
                <div>{this.state.message}</div>
            </div>
        );
    }
});

module.exports = Register;