import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const styles = {
            border: '2px solid white',
        };
        return (
            <header class="sticky-thc">
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" container light>
                    <img to="/formular" width="auto" height="50" src={require('./title1.png')} />
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} style={styles} className="text-light" to="/formular">Jetzt Erstgespr&auml;ch vereinbaren</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
// logo
// Graphen
// nutzerverhalten
// alexander.urban@ovb.de
// finanzkonzepteurban.de
// https://images.clickfunnels.com/b5/9214e05d1840de8818f7ff40920da8/Bekannt-aus-4-.svg