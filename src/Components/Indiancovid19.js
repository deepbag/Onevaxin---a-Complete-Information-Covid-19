import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Indiancovid19.css';
import register from '../img/register.png';
import location from '../img/location.png';
import slot from '../img/slot.png';
import cocase from '../img/cocase.png';
import activecs from '../img/activecs.png';
import covercs from '../img/covercs.png';
import codeath from '../img/codeath.png';


const Covid19 = () => {

    const [covidtotal, setCovidtotal] = useState([]);
    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
        .then((resp) => resp.json())
        .then(cototal=>setCovidtotal(cototal.statewise[0]))
        .catch((err)=>{
            console.log("There was problem please refresh page!")
        })
        console.log(covidtotal)
    },[covidtotal])


    return (
        <>
            <div className="container">
                <h3>Welcome to Onevaxin! <span className="blink">Live ⚡</span></h3>
                <div class="note">
                    <p>Stay Home Stay Safe! Check your nearest vaccination center and slots availability.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="totaldata dataone">
                            <p><img src={cocase} alt="corona" width="100px"/></p>
                            <h3>{covidtotal.confirmed} <span className="blinkcovid">Live ⚡</span></h3>
                            <h2>Total <span style={{color:"#ffcc01"}}>Cases</span> in India</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="totaldata dataone">
                            <p><img src={activecs} alt="corona" width="100px"/></p>
                            <h3>{covidtotal.active} <span className="blinkcovid">Live ⚡</span></h3>
                            <h2><span style={{color:"#ffcc01"}}>Active</span> Cases in India</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="totaldata datatwo">
                            <p><img src={covercs} alt="corona" width="100px"/></p>
                            <h3>{covidtotal.recovered} <span className="blinkcovid">Live ⚡</span></h3>
                            <h2>Total <span style={{color:"#69ce70"}}>Cover</span> in India</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="totaldata datathree">
                            <p><img src={codeath} alt="corona" width="100px"/></p>
                            <h3>{covidtotal.deaths} <span className="blinkcovid">Live ⚡</span></h3>
                            <h2>Total <span style={{color:"red"}}>Death</span> in India</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container vaccine">
            <h2>Get Vaccinated and Stay Safe <a href="https://www.cowin.gov.in/" className="registervacc" target="_blank" rel="noreferrer">Register ⚡</a></h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="getvaccined">
                            <p><img src={register} alt="register" width="100px"/></p>
                            <h4>REGISTER YOURSELF</h4>
                            <p>Register using your mobile number or aadhaar number or any other identity docs.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="getvaccined">
                            <p><img src={location} alt="corona" width="100px"/></p>
                            <h4>CHOOSE LOCATION</h4>
                            <p>Select your nearby vaccine center in your state in your district for vaccination.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="getvaccined">
                            <p><img src={slot} alt="corona" width="100px"/></p>
                            <h4>CONFIRM YOUR SLOT</h4>
                            <p>Check and book your vaccine slot to get vaccine in your own time in your nearby hospital.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid19;
