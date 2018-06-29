import React, { Component } from 'react';

import Navigation from './Navigation';
import Countdown from './Countdown';
import Flights from './Flights';
import Accommodation from './Accommodation';
import Footer from './Footer';
import Agenda from './Agenda';
import Codecationists from './Codecationists';
import Food from './Food';
import ScrollableAnchor from 'react-scrollable-anchor'; // configurable - https://github.com/gabergg/react-scrollable-anchor

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <main>
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
                    <ScrollableAnchor id={'codecationists'}>
                        <Codecationists />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'food'}>
                        <Food />
                    </ScrollableAnchor>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
