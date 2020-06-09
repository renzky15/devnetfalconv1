import React from 'react';
import ErrorPic from '../../assets/img/404error.png';
import  './NoMatch.css';

function NoMatch() {
    return (
            
            
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <img className="errorIMG" src={ErrorPic} alt=""/>
            </div>
            <div className="row d-flex justify-content-center">
                <h1>Oops!</h1>
                
            </div>
            <div className="row d-flex justify-content-center">
                
                <p>we can't seem to find the page you are looking for</p>
            </div>
        
        </div>
    )
    }
    export default NoMatch;