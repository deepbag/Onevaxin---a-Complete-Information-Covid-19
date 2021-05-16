import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Findhelp.css';
import db from '../firebase';
import '../Csscomponents/Table.css';

const Findhelp = () => {

    // fetch data from firebase start
    const [helpOther, setHelpOther] = useState([]);
    useEffect(() => {
        db.collection('HelpOther').onSnapshot((snapshot) => {
            setHelpOther(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    // fetch data from firebase end

    return (
        <>
            <div className="container">
            <h3>Find Who Can Help You?</h3>
            <table class="table table-bordered styled-table">
                    <thead>
                        <tr>
                            <th>District ID</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Service Area</th>
                            <th>How help you other?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {helpOther.map((helppeople)=>(
                        <tr>
                            <td>{helppeople.districtid}</td>
                            <td>{helppeople.name}</td>
                            <td>{helppeople.phone}</td>
                            <td>{helppeople.email}</td>
                            <td>{helppeople.position}</td>
                            <td>{helppeople.area}</td>
                            <td>{helppeople.howhelp}</td>
                        </tr>
                    ))
                }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Findhelp;
