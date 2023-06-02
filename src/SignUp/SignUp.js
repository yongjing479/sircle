
import React from 'react';
import './SignUp.css';

function Popup(props){
    return(props.trigger)? (
        <div className="popup">
            <div className="popup-inner">
                <button className = "signin-btn">Sign In</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup