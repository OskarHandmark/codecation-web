import React, { Component } from 'react';

import Navigation from './Navigation';
import Countdown from './Countdown';
import Flights from './Flights';
import Airbnb from './Airbnb';
import Footer from './Footer';
import Agenda from './Agenda';
import Food from './Food';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <main>
                    <Countdown date="2018-10-02T08:55:00" />
                    <Airbnb />
                    <Flights />
                    <Agenda />
                    <Food />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
