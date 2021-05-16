import React from "react";
import { Link } from 'react-router-dom';
import '../Csscomponents/Header.css';
import Popup from 'reactjs-popup';
import AppsIcon from '@material-ui/icons/Apps';


export default function Header() {


    return(
        <>
            <div className="container-fluid header">
                <a href="/" className="bd"><h2 className="brand">Onevax.in</h2></a>
                <div className="popbtn">
                    <Popup
                        trigger={open => (<button className="btn-bar">{open ? <AppsIcon /> : <AppsIcon />}</button>)}
                        position="bottom right" closeOnDocumentClick>
                        <div className="mob-menu">
                            <Link to="/" className="navmob">COVID-19</Link>
                            <hr style={{color: '#000000'}} />
                            <Link to="/Findbydistrict" className="navmob">Vaccine Slot</Link>
                            <hr style={{color: '#000000'}} />
                            <Link to="/Findhelp" className="navmob">Find Help</Link> 
                        </div>
                    </Popup>
                </div>
                <div className="navmenu">
                    <Link to="/" ><button>COVID-19</button></Link>
                    <a href="https://www.cowin.gov.in/" target="_blank" rel="noreferrer"><button>COWIN Register</button></a>
                    <Link to="/Helpother" ><button>Help Other</button></Link>
                    <Link to="/Findbydistrict" ><button>Vaccine Slot</button></Link>
                </div> 
            </div>
        </>
    )
}