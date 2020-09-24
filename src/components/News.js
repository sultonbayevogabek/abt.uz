import React from "react";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap/es";
import {Link} from "react-router-dom";
export default() => {
    return (
        <div className="news">
            <Container>
                <Row>
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <div>
                                    <h4><Link to="news">Abituriyentlar diqqatiga muhim ma'lumot</Link></h4>
                                    <div>
                                        <div>
                                            <i className="icon icon-clock mr-1"></i> 13-Mart, 14:40
                                        </div>
                                        <div>
                                            <a href="#" className="blacklink rounded-pill ml-auto">qabul-2020</a>
                                        </div>
                                    </div>
                                    <p>
                                        2020/2021-o‘quv yilidan boshlab alohida iqtidor talab etiladigan pedagogika
                                        ta’lim
                                        sohasining bakalavriat ta’lim yo‘nalishlariga o‘qishga qabul qilish uchun kasbiy
                                        (ijodiy) imtihonlar bilan birgalikda majburiy uchta – ona tili (o‘zbek, rus yoki
                                        qoraqalpoq tili), matematika va O‘zbekiston tarixi fanlari bo‘yicha test
                                        sinovlari
                                        topshirish tartibi joriy qilinadi
                                    </p>
                                    <Button>Batafsil</Button>
                                    <hr/>
                                </div>
                                <div>
                                    <h4><Link to="news">
                                        «Ular xotiramni tekshirishadimi yoki bilimni?» – «1%» mehmoni oliy ta'limdagi
                                        muammo haqida </Link></h4>
                                    <div>
                                        <div>
                                            <i className="icon icon-clock mr-1"></i>02-Mart, 11:40
                                        </div>
                                        <div>
                                            <a href="#" className="blacklink rounded-pill mr-2">islohotlar</a>
                                            <a href="#" className="blacklink rounded-pill">qonunchilik</a>
                                        </div>
                                    </div>
                                    <p>
                                        «Cambridge» o‘quv markazi tarmog‘i asoschisi, tadbirkor Jahongir Po‘latov «1%»
                                        ko‘rsatuvida O‘zbekistondagi oliy ta'lim muassasalaridagi imtihon qilish
                                        tizimidagi kamchiliklar haqida gapirdi.
                                    </p>
                                    <Button>Batafsil</Button>
                                    <hr/>
                                </div>
                                <div>
                                    <h4><Link to="news">
                                        So‘nggi 5 yilda 8 foiz mehribonlik uyi bitiruvchisi OTMga o‘qishga kirdi </Link>
                                    </h4>
                                    <div>
                                        <div>
                                            <i className="icon icon-clock mr-1"></i>23-Mart, 17:40
                                        </div>
                                        <div>
                                            <a href="#" className="blacklink rounded-pill">islohotlar</a>
                                        </div>
                                    </div>
                                    <p>
                                        2015-2019 yillarda O‘zbekistondagi mehribonlik uylari va bolalar shaharchalarida
                                        jami 1112 nafar bitiruvchi o‘qishni tamomlagan.
                                    </p>
                                    <Button>Batafsil</Button>
                                    <hr/>
                                </div>
                                <div>
                                    <h4><Link to="news">
                                        5ta universitet huzurida Pedagogika instituti tashkil etildi</Link></h4>
                                    <div>
                                        <div>
                                            <i className="icon icon-clock mr-1"></i>13-Mart, 14:40
                                        </div>
                                        <div>
                                            <a href="#" className="blacklink rounded-pill mr-2">islohotlar</a>
                                            <a href="#" className="blacklink rounded-pill">qabul-2020</a>
                                        </div>
                                    </div>
                                    <p>
                                        Respublikadagi 5ta universitet qoshida Pedagogika institutlari tashkil etildi
                                    </p>
                                    <Button>Batafsil</Button>
                                    <hr/>
                                </div>
                                <div>
                                    <h4><Link to="news">So‘nggi ikki yilda 3 nafar rektor va 5 nafar prorektor ta'lim
                                        bilan bog‘liq jinoyatlari uchun javobgarlikka tortilgan </Link></h4>
                                    <div>
                                        <div>
                                            <i className="icon icon-clock mr-1"></i>15-Mart, 14:40
                                        </div>
                                        <div>
                                            <a href="#" className="blacklink rounded-pill mr-2">islohotlar</a>
                                            <a href="#" className="blacklink rounded-pill">korrupsiya</a>
                                        </div>
                                    </div>
                                    <p>
                                        So‘nggi ikki yilda 3 nafar rektor va 5 nafar prorektor ta'lim bilan bog‘liq
                                        jinoyatlari uchun javobgarlikka tortilgan
                                    </p>
                                    <Button>Batafsil</Button>
                                    <hr/>
                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true"
                                                      className="icon icon-angle-left icon-muted"></span>
                                                <span className="sr-only">Oldingi</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><Link to="/news" className="page-link">1</Link>
                                        </li>
                                        <li className="page-item"><Link to="/news" className="page-link">2</Link>
                                        </li>
                                        <li className="page-item"><Link to="/news" className="page-link">3</Link>
                                        </li>
                                        <li className="page-item"><Link to="/news" className="page-link">4</Link>
                                        </li>
                                        <li className="page-item"><Link to="/news" className="page-link">5</Link>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true" className="icon icon-angle-right icon-muted"> </span>
                                                <span className="sr-only">Keyingi</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                        </Card>
                        <Card>
                            <CardBody>
                                <h5>MAVZULAR</h5>
                                <hr/>
                                <a href="#" className="btn rounded-pill">islohotlar</a><a href="#" className="btn rounded-pill">oliygohlar</a>
                                <a href="#" className="btn rounded-pill">oliy ta'lim</a><a href="#" className="btn rounded-pill">maslahatlar</a>
                                <a href="#" className="btn rounded-pill">qabul-2018</a><a href="#" className="btn rounded-pill">xalqaro hamkorlik</a>
                                <a href="#" className="btn rounded-pill">yangiliklar</a><a href="#" className="btn rounded-pill">mulohaza</a>
                                <a href="#" className="btn rounded-pill">imtihon</a><a href="#" className="btn rounded-pill">qabul-2019</a>
                                <a href="#" className="btn rounded-pill">xorijiy oliygohlar</a><a href="#" className="btn rounded-pill">qabul-2017</a>
                                <a href="#" className="btn rounded-pill">huquqiy yordam</a><a href="#" className="btn rounded-pill">kontrakt</a>
                                <a href="#" className="btn rounded-pill">dtm</a><a href="#" className="btn rounded-pill">harbiy</a>
                                <a href="#" className="btn rounded-pill">talaba</a><a href="#" className="btn rounded-pill">sirtqi bo'lim</a>
                                <a href="#" className="btn rounded-pill">texnologiyalar</a><a href="#" className="btn rounded-pill">qarorlar</a>
                                <a href="#" className="btn rounded-pill">tibbiyot</a><a href="#" className="btn rounded-pill">qabul-2020</a>
                                <a href="#" className="btn rounded-pill">qonunchilik</a><a href="#" className="btn rounded-pill">stipendiya</a>
                                <a href="#" className="btn rounded-pill">grantlar</a><a href="#" className="btn rounded-pill">diniy</a>
                                <a href="#" className="btn rounded-pill">xalq ta'limi</a><a href="#" className="btn rounded-pill">test savollari</a>
                                <a href="#" className="btn rounded-pill">korrupsiya</a><a href="#" className="btn rounded-pill">imtiyoz</a>
                                <a href="#" className="btn rounded-pill">video</a><a href="#" className="btn rounded-pill">tanlovlar</a>
                                <a href="#" className="btn rounded-pill">masofaviy ta'lim</a><a href="#" className="btn rounded-pill">reklama</a>
                                <a href="#" className="btn rounded-pill">abt.uz</a><a href="#" className="btn rounded-pill">kollej</a>
                                <a href="#" className="btn rounded-pill">xorij</a><a href="#" className="btn rounded-pill">chet tili</a>
                                <a href="#" className="btn rounded-pill">mutaxasisliklar</a><a href="#" className="btn rounded-pill">test natijalari</a>
                                <a href="#" className="btn rounded-pill">perevod</a><a href="#" className="btn rounded-pill">x-variant</a>
                                <a href="#" className="btn rounded-pill">pedagogika</a><a href="#" className="btn rounded-pill">darsliklar</a>
                                <a href="#" className="btn rounded-pill">natijalar</a><a href="#" className="btn rounded-pill">ilm-fan</a>
                                <a href="#" className="btn rounded-pill">intervyu</a><a href="#" className="btn rounded-pill">mandat</a>
                                <a href="#" className="btn rounded-pill">sport</a><a href="#" className="btn rounded-pill">tayyorlov kurslari</a>
                                <a href="#" className="btn rounded-pill">reyting</a><a href="#" className="btn rounded-pill">xorijiy hamkorlik</a>
                                <a href="#" className="btn rounded-pill">filiallar</a><a href="#" className="btn rounded-pill">kechki bo'lim</a>
                                <a href="#" className="btn rounded-pill">nostrifikatsiya</a><a href="#" className="btn rounded-pill">apellyatsiya</a>
                                <a href="#" className="btn rounded-pill">aksiya</a><a href="#" className="btn rounded-pill">yurfak</a>
                                <a href="#" className="btn rounded-pill">yuridik</a><a href="#" className="btn rounded-pill">muammolar</a>
                                <a href="#" className="btn rounded-pill">tsul</a><a href="#" className="btn rounded-pill">IELTS</a>
                                <a href="#" className="btn rounded-pill">abituriyent</a><a href="#" className="btn rounded-pill">olimlar</a>
                                <a href="#" className="btn rounded-pill">nuqtai-nazar</a><a href="#" className="btn rounded-pill">harbiy imtiyoz</a>
                                <a href="#" className="btn rounded-pill">tayyorgarlik</a><a href="#" className="btn rounded-pill">tdyu</a>
                                <a href="#" className="btn rounded-pill">qalloblik</a><a href="#" className="btn rounded-pill">qalbaki</a>
                                <a href="#" className="btn rounded-pill">armiya</a><a href="#" className="btn rounded-pill">qasamyoq</a>
                                <a href="#" className="btn rounded-pill">suhbat</a><a href="#" className="btn rounded-pill">qishloq xo'jaligi</a>
                                <a href="#" className="btn rounded-pill">grantlar</a><a href="#" className="btn rounded-pill">innovatsiya</a>
                                <a href="#" className="btn rounded-pill">kitoblar</a><a href="#" className="btn rounded-pill">fizika</a>
                                <a href="#" className="btn rounded-pill">xususiy oliygohlar</a><a href="#" className="btn rounded-pill">shartnoma</a>
                                <a href="#" className="btn rounded-pill">ona tili</a><a href="#" className="btn rounded-pill">oliy ta'lim</a>
                                <a href="#" className="btn rounded-pill">prezident maktablari</a><a href="#" className="btn rounded-pill">agrar universitet</a>
                                <a href="#" className="btn rounded-pill">temurbeklar maktabi</a><a href="#" className="btn rounded-pill">agrar</a>
                                <a href="#" className="btn rounded-pill">imtihonlar</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};