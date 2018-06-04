import React, { Component } from 'react';

import Navigation from './Navigation';
import Flights from './Flights';
import Airbnb from './Airbnb';
import Footer from './Footer';
import Agenda from './Agenda';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="main">
                    <Airbnb />
                    <Flights />
                    <Agenda />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
