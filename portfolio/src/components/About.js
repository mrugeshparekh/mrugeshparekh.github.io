import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <h2>About</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 ml-auto text-align">
                            <p>I am Mrugesh Parekh working as software developer at Pulse Microsystems.
                                I am re-developing a company’s website using ASP.NET Core, EF-Core, SQL Server 2014.
                                I am also solving the issues of the existing products. Provide solution to make website internationalization using
                                resource files. I also work on data table editor (inline-edit) to edit data contained in data table easily and quickly.
                                I have also experience in C/C++ to develop customer's feature request in company’s existing application.
                    </p>
                        </div>
                        <div className="col-xl-4 mr-auto text-align">
                            <p>I have hands on experience in technologies like HTML5, CSS3, JavaScript, jQuery, C#.
                                I have experience in develop and design custom responsive website and user interface design.
                                I am extremly passionate about Web Development and Design and helping small business to improve their online presence.
                                I am also working on different MVC framework like MVC4, MVC5 and ASP.NET Core (MVC6).
                                I can learn and adapt quickly new technologies.
                    </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;