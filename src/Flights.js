import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane'

/*
    Flygresa D83656 - 2018 okt 02

    Departure   08:55 Köpenhamn (CPH) Terminal 2
    Arrival     11:45 Barcelona (BCN) Terminal 2

    Flygresa D83657 - 2018 okt 09

    Departure  12:30 Barcelona (BCN) Terminal 2
    Arrival    15:30 Köpenhamn (CPH) Terminal 3

    Hand Luggage x 1, Max 10 kg, Max 55 x 40 x 23 cm
*/

/**/

class Flights extends Component {
    render() {
        return (
            <section className="flights">
                <div className="title">
                    .Flights
                </div>
                <div className="details">
                    <p> Flygresa D83656 - 2018 okt 02 </p>
                    <p>Departure   08:55 Köpenhamn (CPH) Terminal 2 </p>
                    <p> Arrival     11:45 Barcelona (BCN) Terminal 2 </p>

                    <p>Flygresa D83657 - 2018 okt 09 </p>

                    <p>Departure  12:30 Barcelona (BCN) Terminal 2 </p>
                    <p> Arrival    15:30 Köpenhamn (CPH) Terminal 3 </p>

                    <p> Hand Luggage x 1, Max 10 kg, Max 55 x 40 x 23 cm </p>
                </div>
            </section>
        );
    }
}

export default Flights;
