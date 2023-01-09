import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function Cart(){

    //need axios.defaults.withCredentials to allow page to access the stored session
    axios.defaults.withCredentials = true;

    const [loggedInId, setIsLoggedIn] = useState("");
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3200/login").then(response => {
            if(response.data.loggedIn){
                let id = response.data.user[0].ID;
                setIsLoggedIn(id);
                getWishlistProducts(id);
            }    
        });
    }, []);

    return(
        <> 

        </>
    )
}

export default Cart;