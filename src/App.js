import React, { Component } from 'react';

import Navigation from './Navigation.js';
import Flights from './Flights';
import Footer from './Footer.js';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div style={{ height: 700 }}>
                    <Flights />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
