import { Button } from "react-bootstrap";
import '../../css/wishlist.css';
import {removeFromWishList2, addWishlistItemToCart}  from "../../api/wishlist.js";

function WishlistItem({item, userId, setWishlist, wishlist, setCartModalShow}){
    

    return(
        <tr className="table-row">
            <td> 
                <img src={`${item.image_url}`} alt="prod-image" className="product-img"/>
            </td>
            <td> 
                {item.product_name} 
            </td>
            <td> ${item.unit_price} </td>
            <td> 
                <Button variant="primary" onClick={() => addWishlistItemToCart(userId, item.ID, setCartModalShow)} style={{marginRight: "2%"}}> Add to Cart </Button>
                <Button variant="danger" onClick={() => removeFromWishList2(userId, item.ID, wishlist, setWishlist)}> Remove </Button>
            </td>
        </tr>
    )
}

export default WishlistItem;