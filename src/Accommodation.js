import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import images from './img/accommodation';

class Accommodation extends Component {
    render() {
        return (
            <section className="accommodation" style={{position: 'relative'}}>
                <div className="title">.Accommodation</div>
                <div>
                    <Carousel infiniteLoop
                    >
                        {images.map(img => <div> <img src={img} alt=""/> </div>)}
                    </Carousel>
                </div >
            </section >
        );
    }
}

export default Accommodation;
