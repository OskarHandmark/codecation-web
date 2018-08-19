import React from "react";
import { Row, Col } from 'react-flexbox-grid';

class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        this.updateDate();

        // update every second
        this.interval = setInterval(() => {
            this.updateDate();
        }, 1000);
    }

    updateDate() {
        const date = this.calculateCountdown(this.props.date);
        date ? this.setState(date) : this.stop();
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0,
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        const countDown = this.state;
        console.log(countDown);
        return (
            <Row>
                <Col xs={6} sm={6} md={3} lg={3} xl={3} className="countdown-cell">
                    <div className="value">{this.addLeadingZeros(countDown.days)}</div>
                    <div className="unit">{countDown.days === 1 ? 'day' : ' days'}</div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} xl={3} className="countdown-cell">
                    <div className="value">{this.addLeadingZeros(countDown.hours)}</div>
                    <div className="unit">{countDown.hours === 1 ? 'hour' : ' hours'}</div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} xl={3} className="countdown-cell">
                    <div className="value">{this.addLeadingZeros(countDown.min)}</div>
                    <div className="unit">{countDown.min === 1 ? 'minute' : ' minutes'}</div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3} xl={3} className="countdown-cell">
                    <div className="value">{this.addLeadingZeros(countDown.sec)}</div>
                    <div className="unit">{countDown.sec === 1 ? 'second' : ' seconds'}</div>
                </Col>
            </Row>
        );
    }
}

export default Countdown;
