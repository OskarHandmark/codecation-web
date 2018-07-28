import React, { Component } from 'react';
import images from './img/venue';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Image = ({ src }) =>
    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{ padding: 3}}>
        <img className="venue-img" src={src} alt=""/>
    </Col>

class Venue extends Component {
    render() {
        return (
            <section className="venue" style={{ position: 'relative' }}>
                <div className="title">.Venue</div>
                <Grid fluid>
                    <Row>
                        {images.map(img => <Image src={img} />)}
                    </Row>
                </Grid>
            </section >
        );
    }
}

export default Venue;
