import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import images from './img/accommodation';

class Accommodation extends Component {
    render() {
        return (
            <section className="accommodation">
                <div className="title">.Accommodation</div>
                <div style={{ width: '75%', margin: 'auto' }}>
                    <Carousel infiniteLoop
                    >
                        {images.map(img => <div> <img src={img} /> </div>)}
                    </Carousel>
                </div >
            </section >
        );
    }
}

export default Accommodation;
