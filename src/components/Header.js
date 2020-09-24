import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.scss';
import {Link} from "react-router-dom";

const Header = () => {
  return(
      <div>
          <header className="header text-center">
              <h1>ABITURIYENT!</h1>
              <h3 className="mt-3">Tanlangan mutaxassislik bo‘yicha oliygohga kira olasizmi?</h3>
              <h4>Online test yechish orqali bilimlaringizni baholang.</h4>
              <p><Link to='/tests' className="btn shadow-none my-4 text-white">ONLINE TEST TOPSHIRISH</Link></p>
              <img src="images/header.png" alt=""/>
          </header>
      </div>
  )
};
export default Header;