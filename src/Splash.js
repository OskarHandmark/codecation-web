import React from "react";
import { location } from 'react-icons-kit/icomoon/location';
import { calendar } from 'react-icons-kit/fa/calendar';
import Icon from 'react-icons-kit';
import Countdown from './Countdown';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { quotesLeft } from 'react-icons-kit/icomoon/quotesLeft';
import { quotesRight } from 'react-icons-kit/icomoon/quotesRight';

class Splash extends React.Component {
    render() {
        return <div className="splash">
            <Grid fluid>
                <Row>
                    <Col xs={0} sm={0} md={1} lg={1} xl={2} />
                    <Col xs={12} sm={12} md={10} lg={10} xl={8} style={{ margin: "auto" }}>
                        <Row className="splash-info-container">
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="splash-info">
                                <Icon size={16} icon={calendar} />
                                <h4> 2-9 OCTOBER 2018 </h4>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="splash-info">
                                <Icon size={16} icon={location} />
                                <h4> BARCELONA, SPAIN </h4>
                            </Col>
                        </Row>
                        <Countdown date="2018-10-02T08:55:00" />
                        <div className="intro-container">
                            <h4> CODECATION 2018 </h4>
                            <p className="intro-paragraph">
                                Codecation is a motivating hackathon and a small-scale conference focused on exploring and sharing exciting ideas with like-minded engineers, all in comfort of our beautiful house in sunny Barcelona.
                                Two-way knowledge sharing as every hacker is a speaker and every speaker hacks.
                                The perfect chance to explore that new technology you have not had time for.
                            </p>
                            <div className="intro-quote">
                                <div>
                                    <div className="flex">
                                        <Icon className="quote-icon" icon={quotesLeft} size={14} />
                                        <p className="intro-paragraph quote">
                                            This is the best event of the year
                                        </p>
                                        <Icon className="quote-icon" icon={quotesRight} size={14} />
                                    </div>
                                    <div className="author">
                                        <span> Jonas Hallin, </span> <span> Hyker Security </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={1} xl={2} />
                </Row>
            </Grid>
        </div>
    }
}

export default Splash;
