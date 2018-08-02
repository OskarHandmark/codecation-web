import React from "react";
import { location } from 'react-icons-kit/icomoon/location';
import { calendar } from 'react-icons-kit/fa/calendar';
import Icon from 'react-icons-kit';
import Countdown from './Countdown';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Splash extends React.Component {
    render() {
        return <div className="splash">
            <div className="splash-title">
                <h1> CODECATION </h1>
            </div>
            <Grid fluid>
                <Row>
                    <Col xs={0} sm={0} md={1} lg={2} xl={3} />
                    <Col xs={12} sm={12} md={5} lg={4} xl={3} className="splash-info">
                        <Icon size={18} icon={calendar} />
                        <h4> 2-9 OCTOBER 2018 </h4>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={4} xl={3} className="splash-info">
                        <Icon size={18} icon={location} />
                        <h4> BARCELONA, SPAIN </h4>
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={2} xl={3} />
                </Row>
            </Grid>
            <Countdown date="2018-10-02T08:55:00" />
        </div>
    }
}

export default Splash;
