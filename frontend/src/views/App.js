import LoginPage from "../views/page/login/LoginPage.js";
import HomePage from "../views/page/student/homepage/Homepage.js";
import Timetable from "../views/page/student/timetable/Timetable.js";
import Final from "./page/student/examschedule/Finalexam.js";
import Mid from "./page/student/examschedule/Midtermexam.js";
import Bill from "./page/student/bill/Bill.js";
import Score from "./page/student/score/Score.js";
import Program from "./page/student/program/EduProgram.js";
import Prerequisite from "./page/student/program/Prerequisite.js";
import Profile from "./page/student/profile/Profile.js";
import Nav from "./navbar/nav.js"

import logo from '../assets/images/logoIU.webp'
import './App.scss';
import {
  BrowserRouter,
  Switch, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
      <header>
        <div className="logo-img">
          <img src={logo} alt="IUbackground"/>
          <h1>IU EduSoft</h1>
        </div>
        <Nav/>
      </header>

      <body>
        <Switch>
        <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/home-page">
            <HomePage />
          </Route>
          <Route path="/register-course">
            <HomePage />
          </Route>
          <Route path="/time-table">
            <Timetable />
          </Route>
          <Route path="/final-schedule">
            <Final/>
          </Route>
          <Route path="/mid-schedule">
            <Mid/>
          </Route>
          <Route path="/bill">
            <Bill/>
          </Route>
          <Route path="/score">
            <Score/>
          </Route>
          <Route path="/program">
            <Program/>
          </Route>
          <Route path="/prerequisite">
            <Prerequisite/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>

      </body>
    </>
    </BrowserRouter>
  );
}

export default App;
