import React, { Component } from 'react';

import Navigation from './Navigation';
import Countdown from './Countdown';
import Flights from './Flights';
import Accommodation from './Accommodation';
import Footer from './Footer';
import Agenda from './Agenda';
import Food from './Food';
import ScrollableAnchor from 'react-scrollable-anchor'; // configurable - https://github.com/gabergg/react-scrollable-anchor

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="main">
                    <Countdown date="2018-10-02T08:55:00" />
                    <ScrollableAnchor id={'accommodation'}>
                        <Accommodation />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'flights'}>
                        <Flights />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'agenda'}>
                        <Agenda />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'food'}>
                        <Food />
                    </ScrollableAnchor>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
