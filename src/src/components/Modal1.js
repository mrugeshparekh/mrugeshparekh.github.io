import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Img1 from '../img/portfolio/toycharm.png';

class Modal1 extends Component {

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
            <div>
                <a href="#Modal1" className="portfolio-link" onClick={this.toggle}>
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src={Img1} className="img-fluid" alt="" />
                </a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="portfolio-modal modal-lg">
                    <div className="close-modal" onClick={this.toggle}>
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 mx-auto">
                                <ModalBody>
                                    <h2>Ecommerce Website</h2>
                                    <hr className="star-primary" />
                                    <img src={Img1} className="img-fluid img-centered" alt="" />
                                    <p>I developed 
                                        WordPress website with eCommerce plugin in group of people. Its a fully responsive website.
                                        I worked on different part of the project like made contact form, made image grid responsive for
                                        and also worked on jQuery to give some efffects.
                            </p>
                                    <ul className="list-inline item-details">
                                        <li>Date:
                                    <strong>October 2014</strong>
                                        </li>
                                        <li>Service:
                                    <strong>Web Development</strong>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-default" onClick={this.toggle}><i className="fa fa-times"></i> Close</button>
                                </ModalBody>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default Modal1;