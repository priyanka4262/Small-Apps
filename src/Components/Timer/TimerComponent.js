import React, { Component } from 'react';
import { render } from 'react-dom';
class TimerComponent extends Component {
    constructor() {
        super();
        var time = new Date().toLocaleTimeString();
        this.state = {
            currentTime: time
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({
            currentTime: new Date().toLocaleTimeString()
        }), 1000);
    }
    render() {
        return (
            <div className="container">
                <p className="time">Current Time: {this.state.currentTime}</p>
            </div>
        )
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default TimerComponent;