import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import {Container, Row} from "reactstrap/es";
import {Link, NavLink} from "react-router-dom";

export default(props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Container>
                <Row>
                    <Navbar expand="md" light className="navbar w-100">
                        <Link to="/" className="nav-link pl-0"><img src="images/logo.png" alt="Here is logo"/></Link>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <ul className="page-nav__ul">
                        <li className="page-nav__li">
                            <NavLink className="page-nav__link" exact activeClassName="page-nav__link_active"
                                     to="/tests">Testlar</NavLink>
                        </li>
                        <li className="page-nav__li">
                            <NavLink className="page-nav__link" exact activeClassName="page-nav__link_active"
                                     to="/results">Natijalar</NavLink>
                        </li>
                        <li className="page-nav__li">
                            <NavLink className="page-nav__link" exact activeClassName="page-nav__link_active"
                                     to="/universities">Oliygohlar</NavLink>
                        </li>
                        <li className="page-nav__li">
                            <NavLink className="page-nav__link" exact activeClassName="page-nav__link_active"
                                     to="/qabul2019">Qabul 2019</NavLink>
                        </li>
                        <li className="page-nav__li">
                            <NavLink className="page-nav__link" exact activeClassName="page-nav__link_active"
                                     to="/news">Yangiliklar</NavLink>
                        </li>
                        <li className="page-nav__li">
                            <NavLink className="page-nav__link" exact activeClassName="page-nav__link_active"
                                     to="/login">Kirsh <i className="icon icon-log-in icon-black"></i></NavLink>
                        </li>
                    </ul>
                </Collapse>
            </Navbar>
                </Row>
            </Container>
        </div>
    );
};