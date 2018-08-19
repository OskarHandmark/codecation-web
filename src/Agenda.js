import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { calendar } from 'react-icons-kit/fa/calendar';
import { threeHorizontal } from 'react-icons-kit/entypo/threeHorizontal';

const DayItem = ({ header, events }) =>
    <div className="day-item-container">
        <Icon icon={threeHorizontal} size={24} style={{ alignItems: 'flex-start' }} />
        <div className="day-item-content">
            <span className="day-header"> <Icon size={18} icon={calendar} /> {header} </span>
            {events.map(({ time, title, author, desc }) =>
                <div className="day-item">
                    <div className="day-title"> {time && `${time} -`} {title}</div>
                    <div className="day-desc">
                        <span> {desc} </span>
                        <span className="day-author"> {author} </span>
                    </div>
                </div>
            )}
        </div>
    </div>

const day1 = [
    { title: 'Arrival' }
];
const day2 = [
    { time: "12:00", title: "Introductory Presentations", author: '', desc: "Presentation of projects to be worked on during the week. Each participant presents himself and his idea." }
];
const day3 = [
    { time: "16:30", title: "Traefik with Docker, Part 1", author: "Oskar Handmark", desc: "An introduction to docker-based Traefik" },
    { time: "17:00", title: "Traefik with Docker, Part 2", author: "Oskar Handmark", desc: "Using Kubernetes with traefik and docker" },
    { time: "17:30", title: "GraphQL", author: "Michal Stypa", desc: "An introduction to GraphQL" }
];
const day4 = [
    { time: "16:30", title: "TBA", author: "Jonas Hallin", desc: "" },
    { time: "17:00", title: "AWS deploys with lambda and docker", author: "Jonas Af Munck Rosenschöld", desc: "Deploy serverless http backend (django, python) and server side rendered vue frontend (nuxtjs) on aws with lamdba and docker" },
    { time: "17:30", title: "C++", author: "Emil Boman", desc: "How to write modern C++ without wanting to kill yourself" }
];
const day5 = [
    { time: "16:30", title: "Monolith to microservices at Parkster", author: "Anders Davoust", desc: "Parkster's migration from Monolith to microservices" },
    { time: "17:00", title: "Bitcoin vs Blockchain, Part 1", author: "Johan Henriksson", desc: "" },
    { time: "17:30", title: "Bitcoin vs Blockchain, Part 2", author: "Johan Henriksson", desc: "" },
    { time: "17:00", title: "TBA", author: "Jakob Folkesson", desc: "" }
];
const day6 = [
    { time: "11:00", title: "Presentations, Group 1", author: '', desc: "Participants leaving early presents their accomplishments" },
    { time: "16:30", title: "Deep learning", author: "Anton Jakobsson", desc: "Theory, practice, research" },
    { time: "17:00", title: "Tensorflow", author: "Anton Jakobsson", desc: "A deep dive into Tensorflow" },
    { time: "20:00", title: "Kitesurfing 101", author: "Joachim Eriksson", desc: "A theoretical introduction to Kitesurfing" },
    { time: "21:00", title: "Birthday celebrations", author: "Oskar Handmark", desc: "More details TBA" }
];
const day7 = [
    { time: "16:30", title: "PostGraphile", author: "Oskar Handmark", desc: "Hands-on with PostGraphile, an instant & highly-performant GraphQL API for your PostgreSQL database." },
    { time: "17:00", title: "Javascript Debugging", author: "Michal Stypa", desc: "Efficient debugging of modern javascript in Chrome or your favorite editor" },
    { time: "17:30", title: "How a camera works", author: "Anton Jakobsson", desc: "A closer look at how a camera works" },
    { time: "16:30", title: "TBA", author: "Jonas Hallin", desc: "" }
];
const day8 = [
    { title: 'Departure' }
];

class Agenda extends Component {
    render() {
        return (
            <section className="agenda">
                <div className="title">.Agenda</div>
                <div className="agenda-container">
                    <div className="vertical-line" />
                    <div className="day-items">
                        <DayItem header="Day 1 - Oct 2nd" events={day1} />
                        <DayItem header="Day 2 - Oct 3rd" events={day2} />
                        <DayItem header="Day 3 - Oct 4th" events={day3} />
                        <DayItem header="Day 4 - Oct 5th" events={day4} />
                        <DayItem header="Day 5 - Oct 6th" events={day5} />
                        <DayItem header="Day 6 - Oct 7th" events={day6} />
                        <DayItem header="Day 7 - Oct 8th" events={day7} />
                        <DayItem header="Day 8 - Oct 9th" events={day8} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Agenda;