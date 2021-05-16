import React from 'react';
import '../Csscomponents/Sidemenu.css'
import { Link } from 'react-router-dom';

const Sidemenu = () => {
    return (
        <>
            <div class="colside">
            <h4><span>○</span>  Covid-19 Informations</h4>
                <Link to="/" className="navlink">Indian Covid-19</Link>
                <Link to="/Statecases" className="navlink">State Cases</Link>
                <Link to="/Helpline" className="navlink">Helpline Numbers</Link>
                <Link to="/Hospitalpublic" className="navlink">Hospitals <span className="hopub">(from Public⚡)</span></Link>
                <Link to="/Findhelp" className="navlink">Find People to Help? <span className="hopub">(Public⚡)</span></Link>
            </div>
            <div class="colside">
            <h4><span>○</span>  Vaccine Infromations <span className="hopub">(COWIN⚡)</span></h4>
                <Link to="/Districtstate" className="navlink">District in State</Link>
                <Link to="/Findbydistrict" className="navlink">Find Center by District</Link>
                <Link to="/Findbypincode" className="navlink">Find Center by Pincode</Link>
            </div>
            <div class="colside">
            <h4><span>○</span>  Help Infromations <span className="hopub">(from Public⚡)</span></h4>
                <Link to="/Hospitalsubmit" className="navlink">Submit Hospital</Link>
                <Link to="/Helpother" className="navlink">Submit Help Other</Link>
            </div>
        </>
    )
}

export default Sidemenu;
