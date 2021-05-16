import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Csscomponents/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Statecases from './Components/Statecases';
import Sidemenu from './Components/Sidemenu';
import Header from './Components/Header';
import Indiancovid19 from './Components/Indiancovid19';
import Footer from './Components/Footer';
import Helpline from "./Components/Helpline";

import Districtstate from './Vaccineinfo/Districtstate';
import Findbydistrict from './Vaccineinfo/Findbydistrict';
import Findbypincode from "./Vaccineinfo/Findbypincode";

import Helpother from "./Helpinfo/Helpother";
import Hospitalpublic from './Helpinfo/Hospitalpublic';
import Findhelp from "./Helpinfo/Findhelp";
import Hospitalsubmit from "./Helpinfo/Hospitalsubmit";



export default function App() {
  return (
    <>
    <Router>
      <Header />
      <div class="container-fluid">
        <div className="row">
          <div className="col-md-3 col2App">
            <Sidemenu />
          </div>
          <div className="col-md-9 col10App">
            <Switch>
              <Route path="/" exact component={Indiancovid19} />
              <Route path="/Statecases" exact component={Statecases} />
              <Route path="/Helpline" exact component={Helpline} />
              <Route path="/Districtstate" exact component={Districtstate} />
              <Route path="/Findbydistrict" exact component={Findbydistrict} />
              <Route path="/Findbypincode" exact component={Findbypincode} />
              <Route path="/Hospitalsubmit" exact component={Hospitalsubmit} />
              <Route path="/Helpother" exact component={Helpother} />
              <Route path="/Hospitalpublic" exact component={Hospitalpublic} />
              <Route path="/Findhelp" exact component={Findhelp} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
    </>
  );
}


