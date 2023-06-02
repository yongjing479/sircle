 import React from 'react';
 import './LoginPage.css';
 import {Link} from 'react-router-dom';
import Popup from '../SignUp/SignUp';
import {useState} from 'react';


 function LoginPage(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
    <div className = "Login">
        <div className ="facebook">
            <div className = "facebooktext">
                Sircle
            </div>
        
            <div className = "title">
            Sircle helps you connect and share<br></br> with the people in your life.
            </div>
        </div>
        <div className = "logincontainer">
            <div className = "logindetail">
                <input type="email" placeholder='Email address or phone number' />
                <br></br>
                <input type="password" placeholder='Password' />
                <br></br>
                <button className = "btn">
                    <Link to="/HeaderArea">Login</Link>
                </button>   
                <div className ="forget">
                    <a href = "forget">Forgotten password?</a>
                    <br></br>
                
            </div>            
            </div>
            
            <div className = "create">
                <br></br>
                <button className = "btns" onClick={() => setButtonPopup(true)}>
                    Create New Account
                </button>
                <Popup trigger = {buttonPopup}>
                    <h3>My poopup</h3>
                </Popup>
            </div>
            <p></p>
            <br></br>
            <div className="page">
                <a href = "createPage">Create a Page</a> for a celebrity, brand or business.
            </div>
         </div>
    </div>
    )
 }

 export default LoginPage;