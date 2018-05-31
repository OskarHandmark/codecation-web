import React, { Component } from 'react';

import Navigation from './Navigation.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div style={{ height: 700 }}> Content </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
