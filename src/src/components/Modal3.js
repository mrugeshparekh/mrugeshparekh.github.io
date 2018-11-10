import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Img3 from '../img/ENS_Logo-blue.png';

class Modal3 extends Component {

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
                <a href="#Modal3" className="portfolio-link" onClick={this.toggle}>
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src={Img3} className="img-fluid" alt="" />
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
                                    <h2>Project Title</h2>
                                    <hr className="star-primary" />
                                    <img src={Img3} className="img-fluid img-centered" alt="" />
                                    <p>I was working in English Never Stops as Technical Intern to develop company’s product WordPress
                                         and design the landing page using HTML5, CSS3, jQuery and PHP. English Never Stops
                                  was start up company in which I worked as volunteer.</p>
                                    <ul className="list-inline item-details">
                                        <li>Date:
                                    <strong>June 2015 to October 2015</strong>
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

export default Modal3;