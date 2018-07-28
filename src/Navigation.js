import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Navigation = () =>
    <nav>
        <Row>
            <Col xs={0} sm={0} md={1} lg={1} xl={2} />
            <Col xs={12} sm={12} md={10} lg={10} xl={8}>
                <div className="nav-container">
                    <a href='#venue'>.venue</a>
                    <a href='#flights'>.flights</a>
                    <a href='#agenda'>.agenda</a>
                    <a href='#Speakers'>.Speakers</a>
                </div>
            </Col>
            <Col xs={0} sm={0} md={1} lg={1} xl={2} />
        </Row>
    </nav>;

export default Navigation;
