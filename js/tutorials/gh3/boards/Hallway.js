var React = require('react'),
    $ = require('jquery'),
    PubSub = require('pubsub-js');

var Hallway = React.createClass({
    getInitialState: function() {
        return {
            gatherings: []
        }
    },
    componentWillMount: function() {
        this.token_GATHERINGS_REFRESH = PubSub.subscribe('GATHERINGS_REFRESH', function(topic) {
            this.refreshGatherings();
        }.bind(this));
    },
    componentDidMount: function() {
        this.refreshGatherings();
    },
    componentWillUnmount: function() {
        PubSub.unsubscribe(this.token_GATHERINGS_REFRESH);
    },
    refreshGatherings: function() {
        $.ajax({
            url: "api/gatherings/gatherings.json",
            type: "post",
            headers: {
                "Session": localStorage.getItem("session")
            },
            dataType: "json",
            success: function(rsp) {
                if (rsp.status === "ok") {
                    this.setState({
                        gatherings: rsp.gatherings
                    });
                }
            }.bind(this)
        });
    },
    handleGatheringStart: function(e) {
        e.preventDefault;
        PubSub.publish('POPUP_OPEN', {
            type: "custom",
            template: "GatheringCreate"
        });
    },
    handleGatheringRemove: function(gatheringId) {
        $.ajax({
            url: "api/gatherings/remove.json",
            type: "post",
            data: {
                gatheringId: gatheringId
            },
            headers: {
                "Session": localStorage.getItem("session")
            },
            dataType: "json",
            success: function(rsp) {
                if (rsp.status === "ok") {
                    this.refreshGatherings();
                }
            }.bind(this)
        });
    },
    handleGatheringOpen: function(gathering) {
        PubSub.publish('GATHERING_SELECT', gathering);
    },
    renderGathering: function(gathering) {
        return (
            <div key={gathering._id}>
                {/*<a href="javascript:;" onClick={this.handleGatheringRemove.bind(null, gathering._id)}>X</a>&nbsp;*/}
                <a href="javascript:;" onClick={this.handleGatheringOpen.bind(null, gathering)}>{gathering.title}</a>
            </div>
        );
    },
    render: function() {        
        return (
            <div>
                <div>Hey you!</div><br />
                {this.state.gatherings ? this.state.gatherings.map(this.renderGathering) : "<p>You havent been at any gethering yet?</p>"}
                <p><a href="javascript:;" onClick={this.handleGatheringStart}>Start a gethering!</a></p>
            </div>
        );
    }
});

module.exports = Hallway;