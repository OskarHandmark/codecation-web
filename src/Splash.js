import React from "react";
import Countdown from './Countdown';
import { location } from 'react-icons-kit/icomoon/location';
import { calendar } from 'react-icons-kit/fa/calendar';
import Icon from 'react-icons-kit';
import barcelona from './img/barcelona.jpg';

class Splash extends React.Component {
    render() {
        return <div className="splash" style={{ backgroundImage: `url(${barcelona})` }}>
            <div className="splash-title">
                <h1> CODECATION </h1>
            </div>
            <div className="splash-info">
                <div className="flex">
                    <Icon size={18} icon={calendar} />
                    <h4> 2-9 OCTOBER 2018 </h4>
                </div>
                <div className="flex">
                    <Icon size={18} icon={location} />
                    <h4> BARCELONA, SPAIN </h4>
                </div>
            </div>
            <Countdown date="2018-10-02T08:55:00" />
        </div>
    }
}

export default Splash;
