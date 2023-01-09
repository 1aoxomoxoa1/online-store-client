import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../css/wishlist.css'
import WishlistItem from "./WishlistItem";

function Wishlist(){

    //need axios.defaults.withCredentials to allow page to access the stored session
    axios.defaults.withCredentials = true;

    const [loggedInId, setIsLoggedIn] = useState("");
    const [wishlist, setWishlist] = useState([]);
    
    async function getWishlistProducts(id){
        let wishlistProducts = await axios.get(`http://localhost:3200/wishlist/${id}`);
        let ids = wishlistProducts.data.map(object => object.product_id);
        let products = await axios.post(`http://localhost:3200/products`, {
            range: ids
        });
        console.log(products.data);
        setWishlist(products.data);
    }

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
            <NavBar> </NavBar>
            {loggedInId === ""
            ?
            <div style={{margin: "20%"}}> 
                <h3> Please login to see wishlist </h3>
                <a href="/profile"> <p> to login </p> </a>
            </div>
            :
            <div className="wishlist-container"> 
                <h1 style={{margin: "2%"}}> Wishlist </h1>
                {wishlist.length === 0
                ? <h2> Nothing in wishlist </h2>
                :
                <div> 
                    <table className="table"> 
                        <thead> 
                            <tr className="table-head">
                                <th> pic </th>
                                <th>item</th>
                                <th>unit price</th>
                                <th>add to cart</th>
                            </tr>
                        </thead> 
                        <tbody className="table-body"> 
                            {
                                wishlist.map((item) => 
                                    <WishlistItem 
                                        item={item} 
                                        userId={loggedInId}
                                        key={item.ID}
                                        setWishlist={setWishlist} 
                                        wishlist={wishlist}
                                    /> 
                                )
                            }
                        </tbody> 
                    </table>
                </div>
                }
              
                
            </div>
            }
        </>
    )
}


export default Wishlist;