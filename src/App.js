import React, { Component } from 'react';

import Navigation from './Navigation';
import Flights from './Flights';
import Airbnb from './Airbnb';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div style={{ height: 700 }}>
                    <Airbnb />
                    <Flights />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
