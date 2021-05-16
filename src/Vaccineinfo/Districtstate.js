import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './JSON/State.json';
import '../Csscomponents/Table.css';

const Districtstate = () => {

    const [ statevalue, setStatevalue ] = useState();
    const [ statesidtrict, setStatesidtrict ] = useState([]);

    useEffect(() => {
        fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${statevalue}`)
        .then((resstatesidtrict) => resstatesidtrict.json())
        .then(costatesidtrict=>setStatesidtrict(costatesidtrict.districts))
    }, [statevalue])

    return (
       <>
            <div className="container">
                <form className="formstyle">
                    <select class="form-select form-select-lg mb-3 stateselect" aria-label=".form-select-lg example" onChange={(e)=>setStatevalue(e.target.value)}>
                        <option selected>Open this select State</option>
                        {State.map((option) => (<option value={option.value}>{option.label}</option>))}
                    </select>
                </form>


                <table class="table table-bordered styled-table">
                    <thead>
                    <tr>
                        <th>District ID</th>
                        <th>District Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {statesidtrict.map( (covidstatesidtrict)=>(
                        <tr>
                            <td>{covidstatesidtrict.district_id}</td>
                            <td>{covidstatesidtrict.district_name}</td>
                        </tr>
                    ))}   
                    </tbody>
                </table>
            </div>
       </>
    )
}

export default Districtstate;