import React from 'react';
import {Container, Row, Col} from "reactstrap/es";
import {Link} from "react-router-dom";
export default() => {
    return(
        <div className="subjects pt-4 pb-5">
            <Container>
                <h2 className="text-center mb-4">FANLAR</h2>
                <Row className="text-white">
                    <Col lg="4" xs="12" sm="12">
                        <Row>
                            <Col md="12">
                                <div className="d-flex">
                                    <span className="icon icon-math icon-white mb-3"></span>
                                    <Link to="/mathematics" className="stretched-link">MATEMATIKA</Link>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-literature icon-white mb-3"></span>
                                    <Link to="/literature" className="stretched-link">O'ZBEK TILI VA ADABIYOTI</Link>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-english icon-white mb-3"></span>
                                    <Link to="/english" className="stretched-link">INGLIZ TILI</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4">
                        <Row>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-physics icon-white mb-3"></span>
                                    <Link to="/physics" className="stretched-link">FIZIKA</Link>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-informatics icon-white mb-3"></span>
                                    <Link to="/informatics" className="stretched-link">INFORMATIKA</Link>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-chemistry icon-white mb-3"></span>
                                    <Link to="/chemistry" className="stretched-link">KIMYO</Link>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-russian icon-white mb-3"></span>
                                    <Link to="/russian" className="stretched-link">RUS TILI</Link>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-deutchland icon-white mb-3"></span>
                                    <Link to="/deutch" className="stretched-link">NEMIS TILI</Link>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="d-flex">
                                    <span className="icon icon-france icon-white mb-3"></span>
                                    <Link to="/france" className="stretched-link">FRANSUZ TILI</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4">
                        <Row>
                            <Col md="12">
                                <div className="d-flex">
                                    <span className="icon icon-history icon-white mb-3"></span>
                                    <Link to="/history" className="stretched-link">TARIX</Link>
                                </div>
                            </Col>
                            <Col md="12">
                                <div className="d-flex">
                                    <span className="icon icon-geography icon-white mb-3"></span>
                                    <Link to="/geography" className="stretched-link">GEOGRAFIYA</Link>
                                </div>
                            </Col>
                            <Col md="12">
                                <div className="d-flex">
                                    <span className="icon icon-biology icon-white mb-3"></span>
                                    <Link to="/biology" className="stretched-link">BIOLOGIYA</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
};