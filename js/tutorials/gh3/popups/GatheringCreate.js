var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    PubSub = require('pubsub-js');

var GatheringCreate = React.createClass({
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
    handleCreate: function(e) {
        e.preventDefault;
        if (e.keyCode && e.keyCode !== 13) {
            return;
        }
        $.ajax({
            url: "api/gatherings/add.json",
            type: "post",
            data: {
                title: this.refs.title.value,
            },
            headers: {
                "Session": localStorage.getItem("session")
            },
            dataType: "json",
            success: function(rsp) {
                this.setState({
                    message: rsp.message
                });
                if (rsp.status === "ok") {
                    PubSub.publish('GATHERINGS_REFRESH');
                    _.delay(function() {
                        PubSub.publish('POPUP_CLOSE', 'GatheringCreate');
                    }, 500);
                }
            }.bind(this)
        });
    },
    handleCancel: function(e) {
        PubSub.publish('POPUP_CLOSE', 'GatheringCreate');
    },
    render: function() {        
        return (
            <div>
                <label>
                    <span>Enter title:</span><br />
                    <input type="text" ref="title" onKeyDown={this.handleCreate} />
                    <div>{this.state.message}</div>
                </label>
                <p>
                    <a href="javascript:;" onClick={this.handleCreate}>Create</a>&nbsp;
                    <a href="javascript:;" onClick={this.handleCancel}>Cancel</a>
                </p>
            </div>
        );
    }
});

module.exports = GatheringCreate;