import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Img2 from '../img/portfolio/spacelegend.png';

class Modal2 extends Component {

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
                <a href="#Modal2" className="portfolio-link" onClick={this.toggle}>
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src={Img2} className="img-fluid" alt="" />
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
                                    <h2>Space Legend</h2>
                                    <hr className="star-primary" />
                                    <img src={Img2} className="img-fluid img-centered" alt="" />
                                    <p>I develoed game called Space Legend using Greenfoot which is purely on JAVA.</p>
                                    <ul className="list-inline item-details">
                                        <li>Date:
                                    <strong>May 2015</strong>
                                        </li>
                                        <li>Service:
                                    <strong>Mobile Game</strong>
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

export default Modal2;