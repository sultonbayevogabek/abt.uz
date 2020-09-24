import React from 'react';
import '../main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap/es";
import {Link} from "react-router-dom";

const Admission = () => {
    return (
        <div className="admission">
            <Container>
                <Row>
                    <Col md={{size: "6", offset: "3"}} className="text-white text-center">
                        <h4>Qabul kvotalari 2018 / 2019</h4>
                        <p>
                            Bakalavriatning kunduzgi bo‘limlarida o‘tgan yilgiga nisbatan <strong>1714</strong> nafar ko‘proq talaba
                            qabul qilinadi - <strong>69460</strong>, shu jumladan grant bo‘yicha - <strong>17669</strong>, shartnoma bo‘yicha - <strong>51791</strong>.
                        </p>
                        <Link to="/" className="btn shadow-none text-white">Batafsil</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Admission;