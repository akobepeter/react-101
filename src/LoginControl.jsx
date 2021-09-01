import {useState} from "react";

import Greeting from './Greeting';


function LoginButton(props) {
    return (
      <button onClick={props.onClick} style = {{color:'red',backgroundColor: "green"}}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick} style = {{color:'green',backgroundColor: "red"}}>
        Logout
      </button>
    );
  }

function LoginControl() {
    
    const [isLoggedIn,setIsLoggedIn] = useState(false);

       const handleLoginClick = () =>{
        setIsLoggedIn(!isLoggedIn)
       }

      const handleLogoutClick = () =>{
        setIsLoggedIn(!isLoggedIn)
      }

    const LoggedIn = isLoggedIn;
        let button;
         if(isLoggedIn){
             button = <LogoutButton onClick={handleLogoutClick}/>
         }else{
              button = <LoginButton onClick={handleLoginClick}/> 
         }

    return(

        <div>
            
            <Greeting  isLoggedIn={LoggedIn}/>
            {button}
        </div>

    )
}
export default LoginControl;

