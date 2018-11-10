import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            isOpen: false
        };

        this.scrollToElement1 = this.scrollToElement1.bind(this);
        this.scrollToElement2 = this.scrollToElement2.bind(this);
        this.scrollToElement3 = this.scrollToElement3.bind(this);
        this.topScroll = this.topScroll.bind(this);
        this.elementName1 = "el1";
        this.elementName2 = "el2";
        this.elementName3 = "el3";
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    closeNavbar() {
        if (this.state.isOpen === true) {
            this.toggle();
        }
    }

    scrollToSpecificElement(elementName) {
        let scroller = Scroll.scroller;
        let optinos = {
            duration: 1500,
            delay: 100,
            smooth: true
        };

        scroller.scrollTo(elementName, optinos);
    }

    scrollToElement1() {
        this.scrollToSpecificElement(this.elementName1);
        this.closeNavbar();
    }

    scrollToElement2() {
        this.scrollToSpecificElement(this.elementName2);
        this.closeNavbar();
    }

    scrollToElement3() {
        this.scrollToSpecificElement(this.elementName3);
        this.closeNavbar();
    }

    topScroll() {
        Scroll.animateScroll.scrollToTop();
        this.closeNavbar();
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="lg" className="fixed-top">
                    <div className="container">
                        <NavbarBrand title="page-top" className="mr-auto" onClick={this.topScroll}>Mrugesh Parekh</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink title="portfolio" onClick={this.scrollToElement1}>Portfolio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink title="about" onClick={this.scrollToElement2}>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink title="contact" onClick={this.scrollToElement3}>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        );
    }
}

export default Menu;