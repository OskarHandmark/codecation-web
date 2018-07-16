import React from "react";
import { location } from 'react-icons-kit/icomoon/location';
import { calendar } from 'react-icons-kit/fa/calendar';
import Icon from 'react-icons-kit';

class Splash extends React.Component {
    render() {
        const countDown = this.state;

        return <div className="splash">
            <div className="splash-info">
                <div className="flex">
                    <Icon size={18} icon={calendar} />
                    <span> 13-15 SEPTEMBER 2018. </span>
                </div>
                <div className="flex">
                    <Icon size={18} icon={location} />
                    <span> BARCELONA, SPAIN </span>
                </div>
            </div>
            <div classNAme="splash-title">

            </div>
        </div>
    }
}

export default Splash;
