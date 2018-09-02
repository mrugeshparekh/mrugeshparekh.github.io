import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Img1 from '../img/portfolio/toycharm.png';
import Img2 from '../img/portfolio/spacelegend.png';
import Img3 from '../img/ENS_Logo-blue.png';

class Sections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

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
                        <div className="col-sm-4 portfolio-item az1">
                            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={Img1} className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={Img2} className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal3" className="portfolio-link">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src={Img3} className="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sections;