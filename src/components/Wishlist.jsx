import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function Wishlist(){

    //need axios.defaults.withCredentials to allow page to access the stored session
    axios.defaults.withCredentials = true;

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3200/login").then(response => {
            console.log(response)
            if(response.data.loggedIn){
                setIsLoggedIn(true);
            }    
        });
    }, [])

    return( 
        <>
            <NavBar> </NavBar>
            {isLoggedIn === false
            ?
            <div style={{margin: "20%"}}> 
                <h3> Please login to see wishlist </h3>
                <a href="/profile"> <p> to login </p> </a>
            </div>
            :<h1> This is wishlist </h1>
            }
        </>
    )
}


export default Wishlist;