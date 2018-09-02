import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" title="page-top">Mrugesh Parekh</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li className="nav-item page-scroll">
                                <a className="nav-link" title="portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item page-scroll">
                                <a className="nav-link" title="about">About</a>
                            </li>
                            <li className="nav-item page-scroll">
                                <a className="nav-link" title="contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;