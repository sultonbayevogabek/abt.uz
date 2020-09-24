import React from 'react';
import {Container, Row, Col, Card, Button, Label, CardBody} from "reactstrap/es";
import {Link} from "react-router-dom";

const changeInput = (event) => {
    if (event.target.value.length == 9) {
        document.getElementById("prepend").style.borderColor = "#15D1C2";
        document.getElementById("prepend").style.backgroundColor = "rgba(21, 209, 194, 0.07)";
        document.getElementById("prepend").style.boxShadow = "0 0 3px #15D1C2";
        document.getElementById("prepend").style.color = "#495057";
    } else {
        document.getElementById("prepend").style.borderColor = "#A94442";
        document.getElementById("prepend").style.backgroundColor = "rgba(169, 68, 66, 0.2)";
        document.getElementById("prepend").style.boxShadow = "0 0 3px #A94442";
        document.getElementById("prepend").style.color = "#A94442";
    }
};
const Login = () => {
    return (
        <div className="login py-3">
            <Container>
                <Row>
                    <Col md={{size: "4", offset: "4"}} className="p-0">
                        <Card>
                            <CardBody>
                                <h4 className="text-center">Tizimga kirish</h4>
                                <hr/>
                                <form action="https://www.abt.uz/account/login" method="post" className="was-validated">
                                    <div className="form-group mb-0">
                                        <Label htmlFor="userphone">Mobil raqam</Label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="prepend">+(998)</span>
                                            </div>
                                            <input type="text" className="form-control rounded-right"
                                                   onChange={changeInput} id="userphone" name="userphone" maxLength="9"
                                                   minLength="9" required/>
                                            <div className="valid-feedback">&nbsp;</div>
                                            <div className="invalid-feedback mb-0">Noto'g'ri mobil telefon raqami</div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <Label htmlFor="pwd">Parol</Label>
                                        <input type="password" className="form-control" id="pwd" name="password"
                                               maxLength="40" minLength="9" required/>
                                        <div className="valid-feedback">&nbsp;</div>
                                        <div className="invalid-feedback">&#171;Parol&#187; to'ldirilishi shart</div>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" id="check" required/>
                                        <Label htmlFor="check">Saqlab qolmaslik(begona qurilma)</Label>
                                    </div>
                                    <Button type="submit">Kirish</Button>
                                </form>
                            </CardBody>
                        </Card>
                        <Card className="mt-3">
                            <CardBody>
                                <p>Profilingiz mavjud emasmi? Tizim<br/> imkoniyatlaridan to‘liq foydalanish
                                    uchun<br/> ro‘yhatdan o‘ting.</p>
                                <hr/>
                                <Link to="/login/signup" className="btn">Ro'yxatdan o'tish</Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Login;
