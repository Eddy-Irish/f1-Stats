import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/all-time-records' activeStyle>
                        All Time Records
                    </NavLink>
                    <NavLink to='/constructors' activeStyle>
                        Constructors
                    </NavLink>
                    <NavLink to='/drivers' activeStyle>
                        Drivers
                    </NavLink>
                    <NavLink to='/current-season' activeStyle>
                        2021 F1 Season
                    </NavLink>
                    <NavLink to='/individual-seasons' activeStyle>
                        Individual Seasons
                    </NavLink>
                    <NavLink to='/seasons-over-time' activeStyle>
                        F1 Seasons Over Time
                    </NavLink>
                    <NavLink to='/create' activeStyle>
                        Create Record
                    </NavLink>
                    <NavLink to='/edit' activeStyle>
                        Edit Record
                    </NavLink>
                    <NavLink to='/record-list' activeStyle>
                        Records List
                    </NavLink>
                    <NavLink to='/about-me' activeStyle>
                        About Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;