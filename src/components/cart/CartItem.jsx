import { useState } from "react";
import {updateQuantityDb, updateFullCart, removeFromCart} from '../../api/cart-item.js';
import axios from "axios";
import trash from '../../images/trash.png';

function CartItem({cartItem, productId, userId, fullCart, setFullCart}){
    
    //need axios.defaults.withCredentials to allow page to access the stored session
    axios.defaults.withCredentials = true;

    const [quantity, setQuantity] = useState(cartItem.quantity);

    return(
        <tr className="table-row">
            <td> 
                <img src={`${cartItem.image_url}`} alt="prod-image" className="product-img"/>
            </td>
            <td> 
                {cartItem.product_name} 
            </td>
            <td> 
                <select name="quantity" id="quantity" value={quantity} onChange={(event) => {
                    setQuantity(event.target.value);
                    updateQuantityDb(userId, productId, Number(event.target.value));
                    updateFullCart(fullCart, setFullCart, productId, Number(event.target.value));

                }}>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                    <option value="6"> 6</option>
                    <option value="7"> 7</option>
                </select>
            </td>
            <td> ${cartItem.unit_price} </td>
            <td> <img src={trash} alt="trash" onClick={() => removeFromCart(fullCart, setFullCart, userId, productId)} width={"40px"} height={"40px"} className="trash-img"/> </td>
        </tr>
    )
}

export default CartItem;