import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Hospitalsubmit.css';
import db from '../firebase';

const Hospitalsubmit = () => {

    const option = [
        {
            label: "Yes",
            value: "Yes"
        },
        {
            label: "No",
            value: "No"
        }
    ]

    const [ hospitalname, setHospitalname ] = useState("");
    const [ hospitalphone, setHospitalphone ] = useState("");
    const [ hospitalemail, setHospitalemail ] = useState("");
    const [ hospitaladdress, setHospitaladdress ] = useState("");
    const [ whoru, setWhoru] = useState("");

    const [ treatment, setTreatment] = useState("");
    const [ ventilator, setVentilator ] = useState("");
    const [ oxygen, setOxygen] = useState("");
    const [ districtid, setDistrictid ] = useState("");
    const [ loader, setLoader ] = useState(false);


    const handleSubmit =  (e) => {
        e.preventDefault();
        setLoader(true);
        db.collection("NearHospitals")
          .add({
            districtid: districtid,
            hospitalname: hospitalname,
            hospitalphone: hospitalphone,
            hospitalemail: hospitalemail,
            hospitaladdress: hospitaladdress,
            treatment: treatment,
            ventilator: ventilator,
            oxygen: oxygen,
            whoru: whoru
          })
          .then(() => {
            setLoader(false);
            alert("Hospital has been Submitted👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
    
        setDistrictid("");
        setHospitalname("");
        setHospitalphone("");
        setHospitalemail("");
        setHospitaladdress("");
        setTreatment("");
        setVentilator("");
        setOxygen("");
        setWhoru("");
      };

    

    return(
        <>
            <div className="container">
                <h3>Please Provide Given Informations ( Submit Hospital )</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="hospitaldata">
                            <h4>Instruction and Documentation:</h4>
                            <p>How to submit Hospital details</p>
                            <ol>
                                <li>Fill al the given details in the form.</li>
                                <li>Find District id in left side menu District in state.</li>
                                <li>Submit your hospital data.</li>
                                <li>Register in COWIN for vaccination.</li>
                            </ol>
                            <p>How to submit Help Other details</p>
                            <ol>
                                <li>Fill al the given details in the form.</li>
                                <li>Find District id in left side menu District in state.</li>
                                <li>Submit your Help Other data.</li>
                                <li>Register in COWIN for vaccination.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="hospitalform" onSubmit={handleSubmit}>
                            <input type="text" className="hoinfo" placeholder="Hospital Name" value={hospitalname} onChange={(e)=>setHospitalname(e.target.value)} />
                            <input type="text" className="hoinfo" placeholder="Hospital Phone Number" value={hospitalphone} onChange={(e)=>setHospitalphone(e.target.value)} />
                            <input type="email" className="hoinfo" placeholder="Hospital Email" value={hospitalemail} onChange={(e)=>setHospitalemail(e.target.value)} />
                            <textarea type="text" className="hoinfo" placeholder="Hospital Address" value={hospitaladdress} onChange={(e)=>setHospitaladdress(e.target.value)} />
                            <input type="text" className="hoinfo" placeholder="Who are you?" value={whoru} onChange={(e)=>setWhoru(e.target.value)} />
                            <input type="text" className="hoinfo" placeholder="District ID" value={districtid} onChange={(e)=>setDistrictid(e.target.value)} />

                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={treatment} onChange={(e)=>setTreatment(e.target.value)}>
                                <option selected>Covid Treatment?</option>
                                    {option.map((resoption) => (<option value={resoption.value}>{resoption.label}</option>))}
                            </select>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={ventilator} onChange={(e)=>setVentilator(e.target.value)}>
                                <option selected>Ventilator Machine?</option>
                                    {option.map((resoption) => (<option value={resoption.value}>{resoption.label}</option>))}
                            </select>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={oxygen} onChange={(e)=>setOxygen(e.target.value)}>
                                <option selected>Oxygen Cylinder?</option>
                                    {option.map((resoption) => (<option value={resoption.value}>{resoption.label}</option>))}
                            </select>

                            <button type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>Submit Hospital</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hospitalsubmit;