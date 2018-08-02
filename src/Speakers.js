import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
    boman,
    anders,
    johan,
    anton,
    jakob,
    jocke,
    jonas,
    jonasm,
    michal,
    hannes,
    oskar,
    noProfile
} from './img/profiles';

const Profile = ({ name, img }) =>
    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
        <div className="profile">
            <img className="profile-img" src={img} alt="" />
            <div className="name"> {name} </div>
        </div>
    </Col>

class Speakers extends Component {
    render() {
        return (
            <section className="Speakers">
                <div className="title">.Speakers</div>
                <Grid fluid>
                    <Row>
                        <Profile name="Oskar Handmark" img={oskar} />
                        <Profile name="Johan Henriksson" img={johan} />
                        <Profile name="Jonas Hallin" img={jonas} />
                        <Profile name="Anton Jakobsson" img={anton} />
                        <Profile name="Michal Stypa" img={michal} />
                        <Profile name="Joachim Eriksson" img={jocke} />
                        <Profile name="Jakob Folkesson" img={jakob} />
                        <Profile name="Hannes Sandberg" img={hannes} />
                        <Profile name="Anders Davoust" img={anders} />
                        <Profile name="Emil Boman" img={boman} />
                        <Profile name="Jonas Af Munck Rosenschöld" img={jonasm} />
                        <Profile name="Henrik Johansson" img={noProfile} />
                    </Row>
                </Grid >
            </section >
        );
    }
}

export default Speakers;