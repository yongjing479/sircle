import React from 'react';
import './App.css';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
//import Popup from './SignUp/SignUp';
//import HeaderArea from './HeaderArea/HeaderArea';
function App() {
  return (
    <div className="App">
      <LoginPage/>
     {/* <BrowserRouter>
        <Switch>
          <Route path="/LoginPage" exact = {true} component={LoginPage}/>
          <Route path="/HeaderArea"  component={HeaderArea}/>
        </Switch>
     </BrowserRouter> */}
   
    </div>
  );
}

export default App;
