import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="responsive-circle profile-img">
                                <div className="circle-inner"></div>
                            </div>
                            <div className="intro-text">
                                <span className="name">Mrugesh Parekh</span>
                                <hr className="star-light" />
                                <span className="skills">Software Developer at Pulse Microsystems</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;