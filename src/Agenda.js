import React, { Component } from 'react';

const DayItem = ({ title, desc }) =>
    <div className="day-item-container">
        <div className="day-title"> {title} </div>
        <div className="day-desc"> {desc} </div>
    </div>

class Agenda extends Component {
    render() {
        return (
            <section className="agenda">
                <div className="title">.Agenda</div>
                <div>
                    <DayItem title="Day 1" desc="Arrival" />
                    <DayItem title="Day 2" desc="Presentation: X by Y" />
                    <DayItem title="Day 3" desc="Presentation: X by Y" />
                    <DayItem title="Day 4" desc="Presentation: X by Y" />
                    <DayItem title="Day 5" desc="Presentation: X by Y" />
                    <DayItem title="Day 6" desc="Presentation: X by Y" />
                    <DayItem title="Day 7" desc="Presentations and demos" />
                    <DayItem title="Day 8" desc="Departure" />
                </div>
            </section>
        );
    }
}

export default Agenda;
