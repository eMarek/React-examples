var React = require('react'),
    PubSub = require('pubsub-js'),
    Sandwich = require('./Sandwich.js');

var Topbar = React.createClass({
    getDefaultProps: function() {
        return {
            defaultTitle: "Gathering"
        };
    },
    getInitialState: function() {
        return {
            title: this.props.defaultTitle,
            gathering: false
        }
    },
    componentWillMount: function() {
        var storageGathering = localStorage.getItem("gathering");
        var storageGatheringTitle = localStorage.getItem("gatheringTitle");
        if (storageGathering) {
            this.setState({
                gathering: true,
                title: storageGatheringTitle
            });
        }
        this.token_GATHERING_SELECT = PubSub.subscribe('GATHERING_SELECT', this.gatheringSelect);
    },
    componentWillUnmount: function() {
        PubSub.unsubscribe(this.token_GATHERING_SELECT);
    },
    gatheringSelect: function(topic, gathering) {
        this.setState({
            gathering: true,
            title: gathering.title
        });
    },
    handleBack: function() {
        this.token_BACKBUTTON_CLICK = PubSub.publish('BACKBUTTON_CLICK');
        this.setState({
            gathering: false,
            title: this.props.defaultTitle
        });
    },
    render: function() {        
        return (
            <div id="topbar">
                <h1>
                    {this.state.gathering ? <a href="javascript:;" className="back-btn" onClick={this.handleBack}></a> : false}
                    <span>{this.state.title}</span>
                </h1>
                {this.props.appState.session ? <Sandwich /> : false}
            </div>
        );
    }
});

module.exports = Topbar;