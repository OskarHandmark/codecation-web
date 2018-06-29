import React, { Component } from 'react';

const Profile = ({name, desc}) => 
    <div className="profile">
        <div className="profile-img" /> 
        <div className="info-container">
            <div className="name"> {name} </div>
            <div className="desc"> {desc} </div>
        </div>
    </div>

class Codecationists extends Component {
    render() {
        return (
            <section className="codecationists">
                <div className="title">.Codecationists</div>
                <div>
                    <Profile name="Jonas Af Munck Rosenschöld" desc="X, Y Z" />
                    <Profile name="Emil Boman" desc="X, Y Z" />
                    <Profile name="Anders Davoust" desc="X, Y Z" />
                    <Profile name="Joachim Eriksson" desc="X, Y Z" />
                    <Profile name="Jakob Folkesson" desc="X, Y Z" />
                    <Profile name="Jonas Hallin" desc="X, Y Z" />
                    <Profile name="Oskar Handmark" desc="X, Y Z" />
                    <Profile name="Johan Henriksson" desc="X, Y Z" />
                    <Profile name="Anton Jakobsson" desc="X, Y Z" />
                    <Profile name="Henrik Johansson" desc="X, Y Z" />
                    <Profile name="Hannes Sandberg" desc="X, Y Z" />
                    <Profile name="Michal Stypa" desc="X, Y Z" />
                </div>
            </section>
        );
    }
}

export default Codecationists;