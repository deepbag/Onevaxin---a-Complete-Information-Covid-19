import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/App.css';
import '../Csscomponents/Table.css';


const Statecases = () => {

    const [coviddata, setCoviddata] = useState([]);

    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
        .then((res) => res.json())
        .then((codata) => setCoviddata(codata.statewise))
    })

    return (
        <>
            <div className="container">
                <table class="table table-bordered styled-table">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Death</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {coviddata.map((cohelp)=>(
                            <tr>
                                <td>{cohelp.state}</td>
                                <td>{cohelp.confirmed}</td>
                                <td>{cohelp.active}</td>
                                <td>{cohelp.recovered}</td>
                                <td>{cohelp.deaths}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Statecases;
