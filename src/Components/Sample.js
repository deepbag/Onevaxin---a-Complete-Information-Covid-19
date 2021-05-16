import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Table.css';

const Sample = () => {

    const [covidtested, setCovidtested] = useState([]);

    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
        .then((restested) => restested.json())
        .then((cotested) => setCovidtested(cotested.tested))
    })

    return (
       <>
            <div className="container">
            <table class="table table-bordered styled-table">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Total Sample Tested</th>
                        <th>Total Individual Tested</th>
                        <th>Total Positive Cases</th>
                    </tr>
                    </thead>
                    <tbody>
                    {covidtested.map((cotest)=>(
                        <tr>
                            <td>{cotest.testedasof}</td>
                            <td>{cotest.totalsamplestested}</td>
                            <td>{cotest.totalindividualstested}</td>
                            <td>{cotest.totalpositivecases}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
       </>
    )
}

export default Sample;
