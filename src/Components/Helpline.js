import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Table.css';


const Helpline = () => {

    const [covidhelp, setCovidhelp] = useState([]);
    useEffect(() => {
        fetch("https://api.rootnet.in/covid19-in/contacts")
        .then((reshelp) => reshelp.json())
        .then(cohelp=>setCovidhelp(cohelp.data.contacts.regional))
    })

    return (
        <>
            <div className="container">
                <table class="table table-bordered styled-table">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Total Sample Tested</th>
                    </tr>
                    </thead>
                    <tbody>
                    {covidhelp.map( (cohelp)=>(
                        <tr>
                            <td>{cohelp.loc}</td>
                            <td>{cohelp.number}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Helpline
