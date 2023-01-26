import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCartProducts, getCartToDisplay, calculateTotal} from "../../api/cart";
import CartBag from '../../images/cart-bag.png'
import '../../css/cart.css';
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

function Cart(){

    //need axios.defaults.withCredentials to allow page to access the stored session
    axios.defaults.withCredentials = true;

    const [user, setUser] = useState(undefined);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    async function getUsersCart(id){
        let cart = await getCartProducts(id);
        let productWithQuantity = cart.map(cartItem => ({
            product_id: cartItem.product_id,
            quantity: cartItem.quantity
        }));
        let cartShown = await getCartToDisplay(productWithQuantity);
        console.log(cartShown);
        setCart(cartShown);
    }

    //when the cart changes, update the total
    useEffect(() => {
        let total = calculateTotal(cart);
        console.log('calculating total...')
        setTotal(total);
    }, [cart])

    //fetch the cart from DB when the page loads
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/login`).then(response => {
            if(response.data.loggedIn){
                setUser(response.data.user[0]);
                getUsersCart(response.data.user[0].ID);
            }    
        });
    }, []);

    return(
        <> 
            <NavBar> </NavBar>
            {user === undefined
            ?
            <div style={{margin: "20%"}}> 
                <h3> Please login to see cart </h3>
                <a href="/profile"> <p> to login </p> </a>
            </div>
            :
            <div> 
                <div className="flex"> 
                    <div className="left-flex"> 
                        <h3> {user.fname}'s Cart </h3>
                        <img src={CartBag} alt="cart" className="cart-img" />
                    </div>
                    <div className="right-flex"> 
                        <table className="table"> 
                            <thead> 
                                <tr className="table-head">
                                    <th> pic </th>
                                    <th>item</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    <th>remove</th>
                                </tr>
                            </thead> 
                            <tbody className="table-body"> 
                                {
                                    cart.map((item) => 
                                        <CartItem 
                                            cartItem={item}
                                            key={item.ID}
                                            userId = {user.ID}
                                            productId = {item.ID}
                                            fullCart = {cart}
                                            setFullCart = {setCart}
                                        /> 
                                    )
                                }
                            </tbody> 
                        </table>
                        <div className="total-div"> 
                            <div className="amount">
                                <h4> Total: </h4>
                                <h2 style={{color: "green"}}> ${total} </h2>
                            </div>
                            <div className="button"> 
                                <Button variant="primary"> Checkout </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Cart;