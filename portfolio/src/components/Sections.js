import React, { Component } from 'react';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

class Sections extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <h2>Portfolio</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 portfolio-item">
                            <Modal1 />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <Modal2 />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <Modal3 />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sections;