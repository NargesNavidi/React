import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import SignUp from './components/pages/SignUp';
import Bio from './components/pages/Bio';
import Panasonic from './components/pages/Panasonic';
import AuraWayOfLife from './components/pages/AuraWayOfLife';
import InstantRecovery from "./components/pages/InstantRecovery";
import InstantFigure from "./components/pages/InstantFigure";
import InstaSlim from "./components/pages/InstaSlim";
import ProDogg from "./components/pages/ProDogg";
import ISPro from "./components/pages/ISPro";
import LaMonir from "./components/pages/LaMonir";
import PickMyAuto from "./components/pages/PickMyAuto";
import DealerClick from "./components/pages/DealerClick";
import IrvineMotorCars from "./components/pages/IrvineMotorCars";
import CarBuying from "./components/pages/123CarBuying";
import DriveOff from "./components/pages/DriveOff";
import TerraMota from "./components/pages/TerraMota";
import OrganicShop from "./components/pages/OrganicShop";


function App(props) {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Bio" component={Bio} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Panasonic" component={Panasonic} />
            <Route path="/AuraWayOfLife" component={AuraWayOfLife} />
            <Route path="/InstantRecovery" component={InstantRecovery} />
            <Route path="/InstantFigure" component={InstantFigure} />
            <Route path="/InstaSlim" component={InstaSlim} />
            <Route path="/ProDogg" component={ProDogg} />
            <Route path="/ISPro" component={ISPro} />
            <Route path="/LaMonir" component={LaMonir} />
            <Route path="/PickMyAuto" component={PickMyAuto} />
            <Route path="/DealerClick" component={DealerClick} />
            <Route path="/IrvineMotorCars" component={IrvineMotorCars} />
            <Route path="/123CarBuying" component={CarBuying} />
            <Route path="/DriveOff" component={DriveOff} />
            <Route path="/TerraMota" component={TerraMota} />
            <Route path="/OrganicShop" component={OrganicShop} />
        </Switch>
      </Router>


    </>
  );
}

export default App;

