import React, { Component } from 'react';

import Navigation from './Navigation';
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
                <div className="main">
                    <Airbnb />
                    <Flights />
                    <Agenda />
                    <Food />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
