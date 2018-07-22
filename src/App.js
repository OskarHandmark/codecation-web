import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Navigation from './Navigation';
import Splash from './Splash';
import Flights from './Flights';
import Accommodation from './Accommodation';
import Footer from './Footer';
import Agenda from './Agenda';
import Speakers from './Speakers';
import Food from './Food';

configureAnchors({ offset: -60 });

class App extends Component {
    render() {

        return (
            <React.Fragment>
                <Navigation />
                <main>
                    <Splash />
                    <ScrollableAnchor id={'accommodation'}>
                        <Accommodation />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'flights'}>
                        <Flights />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'agenda'}>
                        <Agenda />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'Speakers'}>
                        <Speakers />
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
