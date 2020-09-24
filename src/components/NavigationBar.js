import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import {Container, Row} from "reactstrap/es";
import {Link} from "react-router-dom";

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
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/tests" className="nav-link active">Testlar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/results" className="nav-link">Natijalar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/universities" className="nav-link">Oliygohlar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/qabul2019" className="nav-link">Qabul 2019</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/sirtqi" className="nav-link">Sirtqi 2019</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/news" className="nav-link">Yangiliklar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/login" className="nav-link">Kirish <i className="icon icon-log-in icon-black"></i></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
                </Row>
            </Container>
        </div>
    );
};