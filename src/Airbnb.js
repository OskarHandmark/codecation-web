import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'

class Airbnb extends Component {
    render() {
        return (
            <section className="airbnb">
                <div className="title">
                    <FontAwesomeIcon size="md" icon={faHome} />
                    Airbnb
                </div>
                <div className="details">
                    <p>  2 October Incheckning när som helst efter 15:00 </p>
                    <p>9 October Checka ut senast 12:00 </p>
                    <p> https://www.airbnb.se/rooms/351221 </p>

                    <p>Badalona, Catalunya 08916 </p>
                    </div>
            </section>
        );
    }
}

export default Airbnb;
