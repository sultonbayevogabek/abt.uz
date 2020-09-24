import React from 'react';
import {Container, Row, Col, Card, CardBody} from "reactstrap/es";
import $ from "jquery/dist/jquery";
import {Link} from "react-router-dom";

export default() => {
    $(document).ready(function () {
        $("#myInput").on("keyup", function () {
            let value = $(this).val().toLowerCase();
            $("#myList li").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    return (
        <div className="universities">
            <Container>
                <Row>
                    <Col md="8">
                        <input className="form-control mb-3" id="myInput" type="text"
                               placeholder="Oliygoh nomi yoki mutaxasislik" autoFocus/>
                        <ul className="list-group shadow border-0" id="myList">
                            <li className="list-group-item text-center"><Link to="/oliygohlar">Oliygohlar
                                ro'yxati</Link></li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Andijon davlat tibbiyot
                                    instituti</Link>
                                <p>Andijon viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Andijon davlat universiteti</Link>
                                <p>Andijon viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Andijon mashinasozlik tibbiyot
                                    instituti</Link>
                                <p>Andijon viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Buxoro davlat tibbiyot
                                    instituti</Link>
                                <p>Buxoro viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Buxoro davlat universiteti</Link>
                                <p>Buxoro viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Buxoro muhandislik-texnika
                                    instituti</Link>
                                <p>Buxoro viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Farg'ona davlat universiteti</Link>
                                <p>Farg'ona viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Farg'ona politexnika instituti</Link>
                                <p>Farg'ona viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Guliston davlat universiteti</Link>
                                <p>Sirdaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Ipak yo'li xalqaro turizm
                                    instituti</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Jahon iqtisodiyoti va diplomatiya
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Jizzax davlat pedagogika
                                    instituti</Link>
                                <p>Jizzax viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Jizzax politexnika instituti</Link>
                                <p>Jizzax viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Milliy raqs va xareografiya oliy
                                    maktabi</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Milliy rassomlik va dizayn
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Namangan davlat universiteti</Link>
                                <p>Namangan viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Namangan muhandislik-qurilish
                                    instituti</Link>
                                <p>Namangan viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Namangan muhandislik-texnologiya
                                    instituti</Link>
                                <p>Namangan viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Navoi davlat konchilik
                                    instituti</Link>
                                <p>Navoi viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Navoi davlat konchilik institutining
                                    Zarafshon shahridagi fakulteti</Link>
                                <p>Navoi viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Navoi davlat pedagogika
                                    instituti</Link>
                                <p>Navoi viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Nizom nomidagi Toshkent davlat
                                    pedagogika universitetining
                                    Termiz filiali</Link>
                                <p>Surxondaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Nukus davlat pedagogika
                                    instituti</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston Milliy universiteti Jizzax
                                    filiali</Link>
                                <p>Jizzax viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston davlat jismoniy tarbiya va
                                    sport universiteti Nukus filiali</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbek davlat jismoniy tarbiya va
                                    sport universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston davlat jahon tillari
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston davlat
                                    konservatoriyasi</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston davlat san'at va madaniyat
                                    institutining Farg'ona mintaqaviy filiali</Link>
                                <p>Farg'ona viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston davlat san'at va madaniyat
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston jurnalistika va ommaviy
                                    kommunikatsiyalar universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston milliy universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">O'zbekiston xalqaro islom
                                    akademiyasi</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Qarshi davlat universiteti</Link>
                                <p>Qashqadaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Qarshi muhandislik-iqtisodiyot
                                    instituti</Link>
                                <p>Qashqadaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Qoraqalpoq davlat universiteti</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Qo'qon davlat pedagogika
                                    instituti</Link>
                                <p>Farg'ona viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Samarqand davlat arxitektura-qurilish
                                    instituti</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Samarqand davlat chet tillar
                                    instituti</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Samarqand davlat tibbiyot
                                    instituti</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Samarqand universiteti</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Samarqand iqtisodiyot va servis
                                    instituti</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Samarqand veterenariya meditsinasi
                                    instituti</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Samarqand veterenariya meditsinasi
                                    instituti Nukus filiali</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Soliq akademiyasi</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat texnika
                                    universitetining Olmaliq filiali</Link>
                                <p>Toshkent viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Termiz davlat universiteti</Link>
                                <p>Surxondaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Termiz davlat universitetining Denov
                                    filiali</Link>
                                <p>Surxondaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent avtomobil yo'llarini
                                    loyihalash, qurish va ekspluatatsiyasi instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent axborot texnologiyalari
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent axborot texnologiyalari
                                    universiteti Farg'ona filiali</Link>
                                <p>Farg'ona viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent axborot texnologiyalari
                                    universiteti Nukus filiali</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent axborot texnologiyalari
                                    universiteti Qarshi filiali</Link>
                                <p>Qashqadaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent axborot texnologiyalari
                                    universiteti Samarqand filiali</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent axborot texnologiyalari
                                    universiteti Urganch filiali</Link>
                                <p>Xorazm viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat agrar
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat agrar universiteti
                                    Andijon filiali</Link>
                                <p>Andijon viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat agrar universiteti
                                    Nukus filiali</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat agrar universiteti
                                    Termiz filiali</Link>
                                <p>Surxondaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat iqtisodiyot
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat iqtisodiyot
                                    universiteti Samarqand filiali</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat o'zbek tili va
                                    adabiyoti universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat pedagogika
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat pedagogika
                                    universiteti Shahrisabz filiali</Link>
                                <p>Qashqadaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat sharqshunoslik
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat stomotologiya
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat stomotologiya
                                    instituti Andijon filiali</Link>
                                <p>Andijon viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat stomotologiya
                                    instituti Buxoro filiali</Link>
                                <p>Buxoro viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat stomotologiya
                                    instituti Nukus filiali</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat stomotologiya
                                    instituti Samarqand filiali</Link>
                                <p>Samarqand viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat texnika
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat texnika universiteti
                                    Qo'qon filiali</Link>
                                <p>Farg'ona viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat texnika universiteti
                                    Termiz filiali</Link>
                                <p>Surxondaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat yuridik
                                    universiteti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent davlat yuridik universiteti
                                    Ixtisoslashtirilgan filiali</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent farmatsevtika
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent irrigatsiya va meliorasiya
                                    instituti Buxoro filiali</Link>
                                <p>Buxoro viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent irrigatsiya va qishloq
                                    xo'jaligini mexanizatsiyalash muhandislari instituti Qarshi filiali</Link>
                                <p>Qashqadaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent irrigatsiya va qishloq
                                    xo'jaligini mexanizatsiyalash muhandislari instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent kimyo-texnologiya
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent kimyo-texnologiya instituti
                                    Qo'ng'irot filiali</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent kimyo-texnologiya instituti
                                    Shahrisabz filiali</Link>
                                <p>Qashqadaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent kimyo-texnologiya instituti
                                    Yangiyer filiali</Link>
                                <p>Sirdaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent moliya instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent pediatriya tibbiyot
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent pediatriya tibbiyot
                                    institutining Nukus filiali</Link>
                                <p>Qoraqalpog'iston Respublikasi</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent temir yo'l muhandislari
                                    instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent tibbiyot akademiyasi</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent tibbiyot akademiyasi Farg'ona
                                    filiali</Link>
                                <p>Farg'ona viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent tibbiyot akademiyasi Urganch
                                    filiali</Link>
                                <p>Xorazm viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent tibbiyot akademiyasi Termiz
                                    filiali</Link>
                                <p>Surxondaryo viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent to'qimachilik va yengil
                                    sanoat instituti</Link>
                                <p>Toshkent shahri</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Toshkent viloyati Chirchiq davlat
                                    pedagogika instituti</Link>
                                <p>Toshkent viloyati</p>
                            </li>
                            <li className="list-group-item p-2">
                                <Link to="/oliygohlar" className="stretched-link">Urganch davlat universiteti</Link>
                                <p>Xorazm viloyati</p>
                            </li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardBody>
                                Mutaxassisliklar, kirish ballari hamda test natijalari bilan tanishish uchun mos
                                oliygohni tanlang. Qidiruv maydoniga oliygoh nomi, fakultet yoki mutaxassislik nomini
                                kiritgan holda kerakli oliygohni izlash mumkin.
                            </CardBody>
                        </Card>
                        <Card className="my-3">
                        </Card>
                        <Card>
                            <CardBody>
                                <h5>YANGILIKLAR</h5>

                                <hr/>
                                <Link>
                                    <img src="images/exam.jpg" alt=""/>
                                    <p>Abituriyentlar diqqatiga muhim ma'lumot</p>
                                </Link>
                                <hr/>
                                <Link>
                                    <img src="images/pedagogika.jpg" alt=""/>
                                    <p>5 ta universitet huzurida Pedagogika instituti tashkil etildi</p>
                                </Link>
                                <hr/>
                                <Link>
                                    <img src="images/talim.jpg" alt=""/>
                                    <p>Oltita ta'lim yo‘nalishida o‘qish muddati uch yil etib belgilandi</p>
                                </Link>
                                <hr/>
                                <Link>
                                    <img src="images/narxoz.jpg" alt=""/>
                                    <p>Qarshi, Nukus va Urganchda «Narxoz»ning filiallari ochiladi</p>
                                </Link>
                                <hr/>
                                <Link>
                                    <img src="images/shapka.jpg" alt=""/>
                                    <p>Toshkentda pedagogikaga ixtisoslashgan nodavlat universitet ochiladi </p>
                                </Link>
                                <hr/>
                                <Link>
                                    <img src="images/trans.jpg" alt=""/>
                                    <p>Toshkentda transport universiteti tashkil etiladi </p>
                                </Link>
                                <hr/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};