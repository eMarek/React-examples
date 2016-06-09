var React = require('react'),
    GatheringCreate = require('./GatheringCreate.js'),
    RegistrationDoubleCheck = require('./RegistrationDoubleCheck.js'),
    ChangePassword = require('./ChangePassword.js'),
    FillTheName = require('./FillTheName.js')

var Popup = React.createClass({
    render: function() {
        switch (this.props.popupPayload.template) {
            case 'GatheringCreate':
                return (
                    <div className="popup"><GatheringCreate popupData={this.props.popupPayload.data} /></div>
                );
                break;
            case 'RegistrationDoubleCheck':
                return (
                    <div className="popup"><RegistrationDoubleCheck popupData={this.props.popupPayload.data} /></div>
                );
                break;
            case 'ChangePassword':
                return (
                    <div className="popup"><ChangePassword popupData={this.props.popupPayload.data} /></div>
                );
                break;
            case 'FillTheName':
                return (
                    <div className="popup"><FillTheName popupData={this.props.popupPayload.data} /></div>
                );
                break;
            default:
                console.error("You need to require and set case " + this.props.popupPayload.template + " popup in Popup.jsx file.");
        }
    }
});

module.exports = Popup;