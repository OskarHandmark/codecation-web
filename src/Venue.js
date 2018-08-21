import React, { Component } from 'react';
import images from './img/venue';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IdealImage from 'react-ideal-image';

const Image = ({ src }) =>
    <Col xs={12} sm={12} md={12} lg={6} xl={6} style={{ padding: 3 }}>
        <IdealImage
            className="venue-img"
            placeholder={{ color: 'lightgrey' }}
            srcSet={[{ src: src, width: 700 }]}
            alt="img"
            width={700}
            height={470}
        />
    </Col>

class Venue extends Component {
    render() {
        return (
            <section className="venue" style={{ position: 'relative' }}>
                <div className="title">.Venue</div>
                <Grid fluid className="section-container hovering">
                    <Row>
                        {images.map(img => <Image src={img} />)}
                    </Row>
                </Grid>
            </section >
        );
    }
}

export default Venue;