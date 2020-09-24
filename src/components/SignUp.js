import React from "react";
import {Container, Row, Col, Card, CardBody, Label, Button} from "reactstrap/es";
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
const changePasswordInput = (event) => {
    if (document.getElementById('pwd1').value == document.getElementById('pwd2').value
        && document.getElementById('pwd2').value != "" && document.getElementById('pwd1').value != ""
    && document.getElementById('pwd1').value.length >= 9 && document.getElementById('pwd2').value >= 9) {
        document.getElementById('pwd1').style.borderColor = "#15d1c2";
        document.getElementById('pwd1').style.boxShadow = "0 0 3px #15D1C2";
        document.getElementById('pwd2').style.borderColor = "#15d1c2";
        document.getElementById('pwd2').style.boxShadow = "0 0 3px #15D1C2";
    } else {
        document.getElementById('pwd1').style.borderColor = "#A94442";
        document.getElementById('pwd1').style.boxShadow = "0 0 3px #A94442";
        document.getElementById('pwd2').style.borderColor = "#A94442";
        document.getElementById('pwd2').style.boxShadow = "0 0 3px #A94442";
    }
};
export default() => {
    return (
        <div className="sign-up pt-3 pb-5">
            <Container>
                <Row>
                    <Col md={{size: "6", offset: "3"}}>
                        <form action="https://www.abt.uz/account/login" method="post" className="was-validated">
                            <Card>
                                <CardBody>
                                    <h4>Ro'yxatdan o'tish</h4>
                                    <hr/>
                                    <div className="form-group mb-0">
                                        <Label htmlFor="fullname">To'liq ismi</Label>
                                        <input type="text" className="form-control" id="fullname" name="fullname"
                                               required/>
                                        <div className="valid-feedback">&nbsp;</div>
                                        <div className="invalid-feedback">&#171;To'liq ismi&#187; to'ldirilishi shart
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <Label htmlFor="userphone">Mobil telefon</Label>
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
                                        <Row>
                                            <Col md="6">
                                                <Label htmlFor="pwd1">Parol</Label>
                                                <input type="password" className="form" id="pwd1"
                                                       name="password" minLength="9" required/>
                                                <div className="valid-feedback">&nbsp;</div>
                                                <div className="invalid-feedback">&#171;Parol&#187; to'ldirilishi
                                                    shart
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <Label htmlFor="pwd2">Parolni tasdiqlash</Label>
                                                <input type="password" className="form" id="pwd2" name="password"
                                                       minLength="9" onChange={changePasswordInput} required/>
                                                <div className="valid-feedback">&nbsp;</div>
                                                <div className="invalid-feedback">&#171;Parol&#187; tasdiqlanishi
                                                    shart
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody>
                                    <input type="checkbox" id="check" required/><Label htmlFor="check">Men <Link>Ommaviy
                                    oferta</Link> shartlari bilan tanishdim va qabul qildim</Label>
                                    <hr/>
                                    <Button type="submit" className="btn">Ro'yxatdan o'tish</Button>
                                </CardBody>
                            </Card>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};