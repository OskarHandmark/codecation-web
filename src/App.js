import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Navigation from './Navigation';
import Splash from './Splash';
import Flights from './Flights';
import Venue from './Venue';
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
                    <Grid fluid>
                        <Row>
                            <Col xs={0} sm={0} md={1} lg={1} xl={2} />
                            <Col xs={12} sm={12} md={10} lg={10} xl={8} style={{ "maxWidth": 2100, margin: "auto" }}>
                                <ScrollableAnchor id={'flights'}>
                                    <Flights />
                                </ScrollableAnchor>
                                <ScrollableAnchor id={'agenda'}>
                                    <Agenda />
                                </ScrollableAnchor>
                                <ScrollableAnchor id={'speakers'}>
                                    <Speakers />
                                </ScrollableAnchor>
                                <ScrollableAnchor id={'venue'}>
                                    <Venue />
                                </ScrollableAnchor>
                            </Col>
                            <Col xs={0} sm={0} md={1} lg={1} xl={2} />
                        </Row>
                    </Grid>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
