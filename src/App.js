import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Navigation from './Navigation';
import Splash from './Splash';
import Flights from './Flights';
import Intro from './Intro';
import Venue from './Venue';
import Footer from './Footer';
import Agenda from './Agenda';
import Speakers from './Speakers';

configureAnchors({ offset: -60 });

class App extends Component {
    render() {

        return (
            <React.Fragment>
                <Navigation />
                <main>
                    <Splash />
                    <Intro />
                    <ScrollableAnchor id={'venue'}>
                        <Venue />
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
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
