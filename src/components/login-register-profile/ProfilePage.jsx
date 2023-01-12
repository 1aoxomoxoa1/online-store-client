import NavBar from "../NavBar";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import '../../css/profilepage.css';
import shoeImage from '../../images/adidas.png';
import { useEffect, useState } from "react";
import axios from "axios"; 

function ProfilePage(){

    axios.defaults.withCredentials = true;


    //if isLoggedIn then register and login grid will not show
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //control the register and login grid
    const [formState, setFormState] = useState('login');
    const [isUnderlined, setIsUnderLined] = useState(false);

    //state for user information
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3200/login").then(response => {
            if(response.data.loggedIn){
                setIsLoggedIn(true);
                setUser(response.data.user[0]);
            }
            console.log(response)
        });
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3200/login").then(response => {
            if(response.data.loggedIn){
                console.log("is logged in");
                setIsLoggedIn(true);
                setUser(response.data.user[0]);
            }
            console.log(response)
        });
    }, [isLoggedIn]);


    function handleClick(event){
        setFormState(event.target.id);
        if(event.target.id !== formState){
            setIsUnderLined(!isUnderlined);
        }
    }

    return(
        <div> 
            <NavBar> </NavBar>
            {isLoggedIn === true 
            ? <UserProfile setIsLoggedIn={setIsLoggedIn} user={user}/>
            :
            <div className="login-grid">
                <div className="grid-left"> 
                    <img src={shoeImage} alt="shoes" width={'50%'} style={{marginTop: '10%', marginBottom: '10%'}}/>
                    <h2 style={{margin: '10%'}} > 
                        Login so you dont forget the shoes you really dont need
                    </h2>
                </div>
                <div className="grid-right"> 
                {isLoggedIn
                ?<h2> You are logged in! </h2>
                :
                    <>
                    <div className="form-selector"> 
                        <h3 
                        className={`selector ${isUnderlined ? "underlined" : "not-underlined"}`} 
                        onClick={handleClick} 
                        id="login"> 
                            Login 
                        </h3>
                        <h3 
                        className={`selector ${isUnderlined === false ? "underlined" : "not-underlined"}`} 
                        onClick={handleClick} 
                        id="register"> 
                            Register 
                        </h3>
                    </div>
                        {formState === 'login'
                        ? <LoginForm setIsLoggedIn={setIsLoggedIn}> </LoginForm>
                        : <RegisterForm setIsLoggedIn={setIsLoggedIn}> </RegisterForm>
                        }
                    </>
                }
                    
                </div>
            </div> 
            }
        </div>
    )
}

export default ProfilePage;