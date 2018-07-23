import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { quotesLeft } from 'react-icons-kit/icomoon/quotesLeft';
import { quotesRight } from 'react-icons-kit/icomoon/quotesRight';

class Intro extends Component {
    render() {
        return (
            <section className="intro">
                <div className="intro-container">
                    <h3> CODECATION 2018 </h3>
                    <p className="intro-paragraph">
                        Codecation is a motivating hackathon and a small-scale conference focused on exploring and sharing exciting ideas with like-minded engineers, all in comfort of our beautiful house in sunny Barcelona.
                        Two-way knowledge sharing as every hacker is a speaker and every speaker hacks.
                        The perfect chance to explore that new technology you have not had time for.
                    </p>
                    <div className="intro-quote">
                        <div>
                            <div class="flex">
                                <Icon className="quote-icon" icon={quotesLeft} size={14} />
                                <p className="intro-paragraph quote">
                                    This is the best event of the year
                                </p>
                                <Icon className="quote-icon" icon={quotesRight} size={14} />
                            </div>
                            <div className="author">
                                <span> Jonas Hallin, </span> <span> Hyker Security </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;
