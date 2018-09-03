import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
//import { Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.scrollToElement1 = this.scrollToElement1.bind(this);
        this.scrollToElement2 = this.scrollToElement2.bind(this);
        this.scrollToElement3 = this.scrollToElement3.bind(this);
        this.topScroll = this.topScroll.bind(this);
        this.elementName1 = "el1";
        this.elementName2 = "el2";
        this.elementName3 = "el3";
    }

    // componentDidMount() {

    //     let Events = Scroll.Events;

    //     Events.scrollEvent.register('begin', function() {
    //       console.log("begin", arguments);
    //     });
    
    //     Events.scrollEvent.register('end', function() {
    //       console.log("end", arguments);
    //     });
    
    //   }

    scrollToSpecificElement(elementName) {
        let scroller = Scroll.scroller;
        let optinos = {
            duration: 1500,
            delay: 100,
            smooth: true
          }; 

        scroller.scrollTo(elementName, optinos);
    }

    scrollToElement1(){
        this.scrollToSpecificElement(this.elementName1);
    }

    scrollToElement2(){
        this.scrollToSpecificElement(this.elementName2);
    }

    scrollToElement3(){
        this.scrollToSpecificElement(this.elementName3);
    }

    topScroll(){
        Scroll.animateScroll.scrollToTop();
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" title="page-top" onClick={this.topScroll}>Mrugesh Parekh</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li className="nav-item page-scroll">
                                <a className="nav-link" title="portfolio" onClick={this.scrollToElement1}>Portfolio</a>
                            </li>
                            <li className="nav-item page-scroll">
                                <a className="nav-link" title="about" onClick={this.scrollToElement2}>About</a>
                            </li>
                            <li className="nav-item page-scroll">
                                <a className="nav-link" title="contact" onClick={this.scrollToElement3}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;