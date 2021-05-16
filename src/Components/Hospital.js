import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Table.css';

const Hospital = () => {

    const [covidhos, setCovidhos] = useState([]);
    useEffect(() => {
        fetch("https://api.steinhq.com/v1/storages/5e732accb88d3d04ae0815ae/StateWiseHealthCapacity")
        .then((reshos) => reshos.json())
        .then(cohos=>setCovidhos(cohos))
    })

    return (
        <>
            <div className="container">
            <table class="table table-bordered styled-table">
                    <thead>
                    <tr>
                        <th>State</th>
                        <th>Rural Hospitals</th>
                        <th>Rural Beds</th>
                        <th>Urban Hospitals</th>
                        <th>Urban Beds</th>
                        <th>Total Hospital</th>
                        <th>Total Beds</th>
                    </tr>
                    </thead>
                    <tbody>
                    {covidhos.map((cohost) => (
                        <tr>
                            <td>{cohost.State}</td>
                            <td>{cohost.RuralHospitalsCount}</td>
                            <td>{cohost.RuralBeds}</td>
                            <td>{cohost.UrbanHospitals}</td>
                            <td>{cohost.UrbanBeds}</td>
                            <td>{cohost.TotalHospitalsCount}</td>
                            <td>{cohost.TotalBedsCount}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Hospital;