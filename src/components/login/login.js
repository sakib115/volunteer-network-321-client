/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//css import
import './login.css'
//firebase imports
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase-config'

var provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);

const login = ({ setName }) => {
    
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [massage, setMassage] = useState('')
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            setName(result.additionalUserInfo.profile.name)
            history.replace(from);
        }).catch(function (error) {
            setMassage(error.message)
        });
    }
    return (
        <div className='login-main-div'>
            <div className="login-form">
                <h1 className='mt-3'>Login</h1>
                <button className="reset-btn mt-5" onClick={handleGoogleSignIn}>
                    <div className="google-login">
                        <img src={require('./google.png')} className='google-logo' alt="" />
                        <p>Continue With Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default login;