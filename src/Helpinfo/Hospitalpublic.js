import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Csscomponents/Hospitalpublic.css';
import db from '../firebase';
import '../Csscomponents/Table.css';

const Hospitalpublic = () => {

    // fetch data from firebase start
    const [hospital, setHospital] = useState([]);
    useEffect(() => {
        db.collection('NearHospitals').onSnapshot((snapshot) => {
            setHospital(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    // fetch data from firebase end

    return (
        <>
            <div className="container">
            <h3>Hospitals Posted by Public ( Near Hospital )</h3>
            <table class="table table-bordered styled-table">
                    <thead>
                    <tr>
                        <th>District ID</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Covid Treatment</th>
                        <th>Ventilator Machine</th>
                        <th>Oxygen Cylinder</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hospital.map((hospitalbypublic) => (
                        <tr>
                            <td>{hospitalbypublic.districtid}</td>
                            <td>{hospitalbypublic.hospitalname}</td>
                            <td>{hospitalbypublic.hospitalphone}</td>
                            <td>{hospitalbypublic.hospitalemail}</td>
                            <td>{hospitalbypublic.hospitaladdress}</td>
                            <td>{hospitalbypublic.treatment}</td>
                            <td>{hospitalbypublic.ventilator}</td>
                            <td>{hospitalbypublic.oxygen}</td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Hospitalpublic;
