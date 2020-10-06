//react import
import React from 'react';
import { Link } from 'react-router-dom';
//css import
import './nav.css'
const nav = ({name}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'><img src={require('./Group 1329.png')} alt="" className="navbar-brand "/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to='/' className="nav-link active"><a>Home <span className="sr-only">(current)</span></a></Link>
                    <a className="nav-link" href="#">Donation</a>
                    <Link to='/event' className="nav-link" href="#">Events</Link>
                    <a className="nav-link" href="#">Blog</a>
                        {name
                            ?
                            <h1>{name}</h1>
                            :
                            <Link className="nav-link" to="/login"> <button className="btn btn-primary">Login</button> </Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default nav;