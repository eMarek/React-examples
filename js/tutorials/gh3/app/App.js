var React = require('react'),
    $ = require('jquery'),
    PubSub = require('pubsub-js'),
    Topbar = require('../topbar/Topbar.js'),
    LoggedIn = require('./LoggedIn.js'),
    LoggedOut = require('./LoggedOut.js'),
    Popup = require('../popups/Popup.js');

var App = React.createClass({
    getInitialState: function() {
        return {
            session: false,
            popup: false,
            gathering: false
        }
    },
    componentWillMount: function() {
        var storageSession = localStorage.getItem("session");
        if (storageSession) {
            this.setState({
                session: storageSession
            });
        }
        var storageGathering = localStorage.getItem("gathering");
        if (storageGathering) {
            this.setState({
                gathering: storageGathering
            });
        }
        this.token_SESSION_CARE = PubSub.subscribe('SESSION_CARE', this.sessionCare);
        this.token_GATHERING_SELECT = PubSub.subscribe('GATHERING_SELECT', this.gatheringSelect);
        this.token_BACKBUTTON_CLICK = PubSub.subscribe('BACKBUTTON_CLICK', this.backButtonClick);
        this.token_POPUP_OPEN = PubSub.subscribe('POPUP_OPEN', this.popupOpen);
        this.token_POPUP_CLOSE = PubSub.subscribe('POPUP_CLOSE', this.popupClose);
    },
    componentWillUnmount: function() {
        PubSub.unsubscribe(this.token_SESSION_CARE);
        PubSub.unsubscribe(this.token_GATHERING_SELECT);
        PubSub.unsubscribe(this.token_BACKBUTTON_CLICK);
        PubSub.unsubscribe(this.token_POPUP_OPEN);
        PubSub.unsubscribe(this.token_POPUP_CLOSE);
    },
    sessionCare: function(topic, session) {
        if (session) {
            localStorage.setItem("session", session);
            this.setState({
                session: session
            });
        } else {
            localStorage.removeItem("session");
            this.setState({
                session: false
            });
        }
    },
    gatheringSelect: function(topic, gathering) {
        localStorage.setItem("gathering", true);
        localStorage.setItem("gatheringId", gathering._id);
        localStorage.setItem("gatheringTitle", gathering.title);
        this.setState({
            gathering: true
        });
    },
    backButtonClick: function() {
        localStorage.removeItem("gathering");
        localStorage.removeItem("gatheringId");
        localStorage.removeItem("gatheringTitle");
        this.setState({
            gathering: false
        });
    },
    popupOpen: function(topic, popup) {
        this.setState({
            popup: popup
        });
    },
    popupClose: function(topic, popup) {
        this.setState({
            popup: false
        });
    },
    inBoardSelection() {
        if (this.state.gathering) {
            return "chamber";
        } else {
            return "hallway";
        }
    },
    outBoardSelection() {
        return "entrance";
    },
    render: function() {
        return (
            <div>
            <Topbar appState={this.state} />
                {this.state.session ? <LoggedIn inBoard={this.inBoardSelection()} /> : <LoggedOut outBoard={this.outBoardSelection()} />}
                {this.state.popup ? <Popup popupPayload={this.state.popup} /> : false}
            </div>
        );
    }
});

module.exports = App;