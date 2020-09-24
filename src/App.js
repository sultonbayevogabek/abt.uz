import React from 'react';
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Cards from "./components/Cards";
import {Footer} from "./components/Footer";
import Login from "./components/Login";
import Admission from "./components/Admission";
import Highcharts from "./components/Highcharts";
import Subjects from "./components/Subjects";
import Universities from "./components/Universities";
import SignUp from "./components/SignUp";
import Results from "./components/Results";
import Qabul from "./components/Qabul";
import Sirtqi from "./components/Sirtqi";
import News from "./components/News";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div>
        <BrowserRouter>
            <NavigationBar/>
            <Route exact path="/" component={Header}/>
            <Route exact path="/" component={Cards}/>
            <Route exact path="/" component={Admission}/>
            <Route exact path="/" component={Subjects}/>
            <Route exact path="/" component={Highcharts}/>
            <Route exact path="/" component={Footer}/>
            <Route exact path="/tests" component={Cards}/>
            <Route exact path="/tests" component={Footer}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/login" component={Footer}/>
            <Route exact path="/login/signup" component={SignUp}/>
            <Route exact path="/login/signup" component={Footer}/>
            <Route exact path="/universities" component={Universities}/>
            <Route exact path="/universities" component={Footer}/>
            <Route exact path="/results" component={Results}/>
            <Route exact path="/results" component={Footer}/>
            <Route exact path="/qabul2019" component={Qabul}/>
            <Route exact path="/qabul2019" component={Footer}/>
            <Route exact path="/sirtqi" component={Sirtqi}/>
            <Route exact path="/sirtqi" component={Footer}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/news" component={Footer}/>
            <Route exact path="/subjects" component={Subjects}/>
            <Route exact path="/subjects" component={Footer}/>
        </BrowserRouter>
    </div>
  );
}
