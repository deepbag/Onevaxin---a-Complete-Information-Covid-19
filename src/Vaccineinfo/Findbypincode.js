import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Findbydistrict.css';
import '../Csscomponents/Table.css';


const Findbypincode = () => {

    const [ pincode, setPincode ] = useState("");
    const [ date, setDate ] = useState("");
    const [ month, setMonth ] = useState("");
    const [ year, setYear] = useState("");
    const [ findbypin, setFindbypin ] = useState([]);
                                                         
    useEffect(() => {
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}-${month}-${year}` )
        .then((resfindbypin) => resfindbypin.json())
        .then(cofindbypin=>setFindbypin(cofindbypin.sessions))
    }, [pincode, date, month, year])

    return (
       <>
            <div className="container">
                    <div className="dmy-pin">
                        <input type="text" placeholder="Area Pincode" onChange={(e)=>setPincode(e.target.value)} />
                        <input type="text" placeholder="Date [ 00 ]" onChange={(e)=>setDate(e.target.value)} />
                        <input type="text" placeholder="Month [ 00 ]" onChange={(e)=>setMonth(e.target.value)} />
                        <input type="text" placeholder="Year [ 0000 ]" onChange={(e)=>setYear(e.target.value)} />
                    </div>
               

                <table class="table table-bordered styled-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Block</th>
                        <th>Pincode</th>
                        <th>Time</th>
                        <th>Fees</th>
                        <th>Slot Avaliable</th>
                        <th>Age</th>
                        <th>Vaccine</th>
                    </tr>
                    </thead>
                    <tbody>
                    {findbypin && findbypin.map((covidfindbypin)=>(
                        <tr>
                            <td>{covidfindbypin.center_id}</td>
                            <td>{covidfindbypin.name}</td>
                            <td>{covidfindbypin.address}</td>
                            <td>{covidfindbypin.block_name}</td>
                            <td>{covidfindbypin.pincode}</td>
                            <td>{covidfindbypin.from} to {covidfindbypin.to}</td>
                            <td>{covidfindbypin.fee}</td>
                            <td>{covidfindbypin.available_capacity}</td>
                            <td>{covidfindbypin.min_age_limit}</td>
                            <td>{covidfindbypin.vaccine}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
       </>
    )
}

export default Findbypincode;