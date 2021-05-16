import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './JSON/State.json';
import '../Csscomponents/Findbydistrict.css';
// import '../Csscomponents/Table.css';


const Findbydistrict = () => {

    const [ findstatevalue, setFindstatevalue ] = useState();
    const [ findbydistrict, setFindbydistrict ] = useState([]); // district list fetch
    // const [ datevalue, setDatevalue ] = useState("");
    const [ districtid, setDistrictid ] = useState();
    const [ findcenter, setFindcenter ] = useState([]);

    const [ date, setDate ] = useState("");
    const [ month, setMonth ] = useState("");
    const [ year, setYear] = useState("");
    
    useEffect(() => {
        fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${findstatevalue}`)
        .then((resfindbydistrict) => resfindbydistrict.json())
        .then(cofindbydistrict=>setFindbydistrict(cofindbydistrict.districts))
    }, [findstatevalue])
                                                                    // ${datevalue}
    useEffect(() => {
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${date}-${month}-${year}` )
        .then((resfindcenter) => resfindcenter.json())
        .then(cofindcenter=>setFindcenter(cofindcenter.sessions))
    }, [districtid, date, month, year])

    return (
       <>
            <div className="container">
                    <div className="dmy">
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e)=>setFindstatevalue(e.target.value)}>
                            <option selected>Select State</option>
                                {State.map((option) => (<option value={option.value}>{option.label}</option>))}
                        </select>
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e)=>setDistrictid(e.target.value)}>
                            <option selected>Select District</option>
                                {findbydistrict.map((options) => (<option value={options.district_id}>{options.district_name}</option>))}
                        </select>
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
                    {findcenter && findcenter.map((covidfindcenter)=>(
                        <tr>
                            <td>{covidfindcenter.center_id}</td>
                            <td>{covidfindcenter.name}</td>
                            <td>{covidfindcenter.address}</td>
                            <td>{covidfindcenter.block_name}</td>
                            <td>{covidfindcenter.pincode}</td>
                            <td>{covidfindcenter.from} to {covidfindcenter.to}</td>
                            <td>{covidfindcenter.fee}</td>
                            <td>{covidfindcenter.available_capacity}</td>
                            <td>{covidfindcenter.min_age_limit}</td>
                            <td>{covidfindcenter.vaccine}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
       </>
    )
}

export default Findbydistrict;