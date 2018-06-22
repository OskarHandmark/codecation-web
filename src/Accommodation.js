import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import images from './img/accommodation';

class Accommodation extends Component {
    render() {
        return (
            <section className="accommodation">
                <div style={{ width: '75%', margin: 'auto' }}>
                    <Carousel
                        infiniteLoop
                    >
                        {images.map(img => <div> <img src={img} /> </div>)}
                    </Carousel>
                </div >
                <div className="videos">
                    <YouTube videoId="PW0iOW61IZQ" />
                    <YouTube videoId="fymERNWV5UA" />
                    <YouTube videoId="ebYpLEuoSzo" />
                </div>
            </section >
        );
    }
}

export default Accommodation;
