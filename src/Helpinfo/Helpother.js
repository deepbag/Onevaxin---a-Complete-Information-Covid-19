import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Helpother.css';
import db from '../firebase';

const Helpother = () => {


    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ position, setPosition ] = useState("");
    const [ area, setArea ] = useState("");
    const [ howhelp, setHowhelp ] = useState("");
    const [ districtid, setDistrictid ] = useState("");
    const [ loader, setLoader ] = useState(false);

    const handleSubmit =  (e) => {
        e.preventDefault();
        setLoader(true);
        db.collection("HelpOther")
          .add({
            name: name,
            phone: phone,
            email: email,
            position: position,
            area: area,
            howhelp: howhelp,
            districtid: districtid
          })
          .then(() => {
            setLoader(false);
            alert("Helping has been Submitted👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
          
        setName("");
        setPhone("");
        setEmail("");
        setPosition("");
        setArea("");
        setHowhelp("");
        setDistrictid("");
      };

    return (
        <>
            <div className="container">
                <h3>Please Provide Given Informations ( Help Others )</h3>
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
                            <input type="text" className="hoinfo" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} />
                            <input type="text" className="hoinfo" placeholder=" Your Phone Number" onChange={(e)=>setPhone(e.target.value)} />
                            <input type="email" className="hoinfo" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} />
                            <input type="text" className="hoinfo" placeholder="Current Position" onChange={(e)=>setPosition(e.target.value)} />
                            <input type="text" className="hoinfo" placeholder="Service Area with Pincode" onChange={(e)=>setArea(e.target.value)} />
                            <input type="text" className="hoinfo" placeholder="District ID" onChange={(e)=>setDistrictid(e.target.value)} />
                            <textarea type="text" className="hoinfo" placeholder="How You help Other?" onChange={(e)=>setHowhelp(e.target.value)} />
                            <button type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>Submit Help Other</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Helpother;