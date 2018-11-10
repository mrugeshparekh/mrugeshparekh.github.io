import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col col-md-4">
                                <h3>Location</h3>
                                <p>1005 - 3315 Fieldgate Drive<br />Mississauga, ON L4X2J3</p>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>Around the Web</h3>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/mrugeshparekh" rel="noopener noreferrer" target="_blank" className="btn-social btn-outline">
                                            <i className="fa fa-fw fa-facebook">
                                            </i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://plus.google.com/102529926684676915831/posts" rel="noopener noreferrer" target="_blank" className="btn-social btn-outline">
                                            <i className="fa fa-fw fa-google-plus">
                                            </i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/mrugeshparekh" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline">
                                            <i className="fa fa-fw fa-twitter">
                                            </i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://ca.linkedin.com/in/mrugeshparekh" rel="noopener noreferrer" target="_blank" className="btn-social btn-outline">
                                            <i className="fa fa-fw fa-linkedin">
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>About Me</h3>
                                <p>My Training and my work experience combine with my degree are great fit to your organization.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                Copyright &copy; mrugeshparekh <span className="copyright"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;