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
                    <img className="centr" width="auto" height="50" src={require('./title1.png')} />
                    <ul className="navbar-nav flex-grow">
                        <NavItem className="pad">
                            <NavLink tag={Link} style={styles} className="text-light" to="/formular">Jetzt Erstgespr&auml;ch vereinbaren</NavLink>
                        </NavItem>
                    </ul>
                </Navbar>
            </header>
        );
    }
}

// nutzerverhalten
// alexander.urban@ovb.de
// finanzkonzepteurban.de