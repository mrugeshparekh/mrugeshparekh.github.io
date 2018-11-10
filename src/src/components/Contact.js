import React, { Component } from 'react';
import { Element } from 'react-scroll';
import axios from 'axios';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]: value
            });
    }

    sendEmail(event) {
        axios.post('https://formcarry.com/s/GUa6i_UDHiC',
            this.state
        )
            .then(function (response) {
                //console.log(response);
                alert("Message has been sent");
            })
            .catch(function (error) {
                alert("Something went wrong. Please contact to author at mrugeshparekh@gmail.com.");
                //console.log(error);
            });


        event.preventDefault();
    }

    // sendEmail = e => {
    //     axios.post(
    //       "https://formcarry.com/s/GUa6i_UDHiC", 
    //       this.state, 
    //       {headers: {"Accept": "application/json"}}
    //       )
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    //       console.log(this.state);
    //     e.preventDefault();
    //   }

    render() {
        return (
            <Element name="el3">
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 text-center">
                                <h2>Contact Me</h2>
                                <hr className="star-primary" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-9 ml-auto">
                                <form name="sentMessage" id="contactForm" onSubmit={this.sendEmail} noValidate>
                                    <div className="row control-group">
                                        <div className="form-group col-xl-8 floating-label-form-group controls">
                                            <label>Name</label>
                                            <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." name="name" value={this.state.name} onChange={this.handleChange} />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="row control-group">
                                        <div className="form-group col-xl-8 floating-label-form-group controls">
                                            <label>Email Address</label>
                                            <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." name="email" value={this.state.email} onChange={this.handleChange} />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="row control-group">
                                        <div className="form-group col-xl-8 floating-label-form-group controls">
                                            <label>Phone Number</label>
                                            <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="row control-group">
                                        <div className="form-group col-xl-8 floating-label-form-group controls">
                                            <label>Message</label>
                                            <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success"></div>
                                    <div className="row">
                                        <div className="form-group col-xl-8 btn-center">
                                            <button type="submit" className="btn btn-success btn-lg">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
        );
    }
}

export default Contact;