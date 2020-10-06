//react import
import React from 'react';
//css import
import './registration.css'
import { useParams } from 'react-router-dom';
const Registration = ({ name }) => {
    const { nms } = useParams();
    return (
        <div>
            <div className='registration-main-div'>
                <img src={require('./Group 1329.png')} alt="" className="login-page-logo" />
                <form className="registration-form" action="https://protected-castle-08953.herokuapp.com/addRegistration" method="post">
                    <br/>
                    <h4 >Register as a volunteer For <br />
                    <input name="nms" type="text" id="nms" className='registration-inputs' placeholder="nms" value={nms} /><br/>
                    </h4>
                    <input name="name" type="text" id="name" className='registration-inputs' placeholder="Name" value={name} /><br/>
                    <input required name="email" type="email" id="email" className='registration-inputs' placeholder="Email" /><br/>
                    <input required name="date" type="date" id="date" className='registration-inputs' /><br/>
                    <input required name='description' type="text" id="description" className='registration-inputs' placeholder='Description' /><br />
                    <br />
                    <button className="btn btn-primary register-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;