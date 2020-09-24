import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.scss';
import {Row, Container, Col, Card, CardHeader, CardBody, CardFooter} from "reactstrap/es";
import {Link} from "react-router-dom";


const Cards = () => {
    return (
        <div className="cards text-center">
            <Container>
                <h1>TEST TOPSHIRISH</h1>
                <Row>
                    <Col md="4" sm="12" lg="4">
                        <Card className="border-0 mt-xs-3 mt-sm-3 mt-md-0 mt-lg-0">
                            <CardHeader className="border-0">
                                <h3>Virtual imtihon</h3>
                                <div className="mx-auto d-flex justify-content-center align-items-center"><i
                                    className="icon icon-computer icon-blue"></i></div>
                            </CardHeader>
                            <CardBody className="text-justify">
                                <p>1-avgust kunidagi test imtihonlarini topshiring. Tanlangan mutaxassislik bo‘yicha 30
                                    talik test savollaridan iborat 3 ta blokdagi testlarni 3 soat davomida ishlab
                                    chiqing va natijalarga ega bo‘ling. VIRTUAL IMTIHON topshirish bepul.</p>
                            </CardBody>
                            <CardFooter className="border-0 text-white">
                                <Link to="/testlar" className="text-white stretched-link">Imtihon topshirish</Link>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4" sm="12" lg="4">
                        <Card className="border-0 mt-xs-3 mt-sm-3 mt-md-0 mt-lg-0">
                            <CardHeader className="border-0">
                                <h3>Mavzuli testlar</h3>
                                <div className="mx-auto d-flex justify-content-center align-items-center"><i
                                    className="icon icon-bookwithpen icon-blue"></i></div>
                            </CardHeader>
                            <CardBody className="text-justify">
                                <p>Tanlangan fanlardan mavzuli testlar yoki aralash testlarni ishlab chiqing va
                                    bilmingizni mustaxkamlang. Savollar soni ixtiyoriy, natijalar test yakunida yoki
                                    test davomida. MASHG‘ULOT testlarini topshirish <strong>bepul</strong>.</p>
                            </CardBody>
                            <CardFooter className="border-0 text-white">
                                <Link to="/testlar" className="text-white stretched-link">Mashg'ulotni boshlash</Link>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4" sm="12" lg="4">
                        <Card className="border-0 mt-xs-3 mt-sm-3 mt-md-0 mt-lg-0">
                            <CardHeader className="border-0">
                                <h3>Blokli testlar</h3>
                                <div className="mx-auto d-flex justify-content-center align-items-center"><i
                                    className="icon icon-bookwithpen icon-blue"></i></div>
                            </CardHeader>
                            <CardBody className="text-justify">
                                <p>36 ta test savolidan iborat blokli testlar <strong>DTM standartlari</strong> asosida professional
                                    repetitorlar tomonidan tuzilgan bo'lib mavzularning ketma-ketligi va savollarning
                                    qiyinlilik darajasi kirish imtihonlaridagi testlar kabi tanlab olinadi. Blokli test
                                    topshirish bepul.</p>
                            </CardBody>
                            <CardFooter className="border-0 text-white">
                                <Link to="/testlar" className="text-white stretched-link">Blokli test ishlash</Link>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Cards;