import React, { Component } from 'react';
import images from './img/venue';

class Venue extends Component {
    render() {
        return (
            <section className="venue" style={{ position: 'relative' }}>
                <div className="title">.Venue</div>
                <div className="image-grid">
                    {images.map(img => <div> <img src={img} alt=""/> </div>)}
                </div>
            </section >
        );
    }
}

export default Venue;
