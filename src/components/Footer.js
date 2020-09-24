import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../main.scss'
import {Container, Row, Col} from "reactstrap/es";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer pt-4">
            <Container>
                <Row>
                    <Col md="3">
                        <p><a href="mailto:info@abt.uz" target="_blank"><i className="icon icon-email icon-muted mr-1"></i>info@abt.uz</a></p>
                        <p><a href=" https://t.me/joinchat/AAAAAD-qgW7AqEn2cDsxmA" target="_blank"><i className="icon icon-send icon-muted mr-1"></i>Telegram</a></p>
                    </Col>
                    <Col md="3">
                        <p><Link to="/tests">Test topshirish</Link></p>
                        <p><Link to="/results">Test natijalari</Link></p>
                    </Col>
                    <Col md="3">
                        <p><Link to="/qabul2019">Qabul 2019</Link></p>
                        <p><Link to="/universities">Oliygohlar</Link></p>
                    </Col>
                    <Col md="3">
                        <p><Link to="/subjects">Fanlar</Link></p>
                        <p><Link to="/conditions">Foydalanish shartlari</Link></p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md="8">
                        <p className="text-right">Copyright &copy; 2016-2020, <a href="http://activemedia.uz" target="_blank">Activemedia Solutions</a> tomonidan ishlab chiqilgan.</p>
                    </Col>
                    <Col md="4">
                        <p className="text-right">
                            <a href="https://play.google.com/store/apps/details?id=uz.activemedia.abt" target="_blank">
                                <img src="http://static.abt.uz/assets/4442aece/img/googleplay.png" width="135px" height="40px" alt="ABT.UZ - abituriyentlar uchun onlayn testlar"/>
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};