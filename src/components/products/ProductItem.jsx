import wishlist from "../../images/wishlist.png"
import activeWish from "../../images/active_wishlist.png";
import '../../css/productitem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {removeFromWishList, addToWishlist} from "../../api/wishlist.js";

function ProductItem(props) {

  //need axios.defaults.withCredentials to allow page to access the stored session
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  //this handles button click to send user to product details page
  function sendToProductDetails(event){
    let id = event.target.id;
    navigate(`/products/${id}`);
  }

  return (
    <Card style={{ width: '16rem', margin: "2%"}}>
      <Card.Img variant="top" src={props.url} height={"75%"} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title> $ {props.price} </Card.Title>
        <div style={{display: "flex", justifyContent: "space-between"}}> 
          <Button variant="primary" id={props.productID} onClick={(event) => sendToProductDetails(event)}>See Product</Button>
          {props.inWishlist === true
          ?<img src={activeWish} id={props.productID} alt="wishlist" width={"50px"} height={"50px"} onClick={(event) => {
            console.log('calling');
            removeFromWishList(event, props.wishListItems, props.setWishListItems)}
          }/>
          :<img src={wishlist} 
          id={props.productID} 
          alt="wishlist" width={"50px"} height={"50px"} 
          onClick={(event) => addToWishlist(event, 10, props.wishListItems, props.setModalShow, props.setWishListItems)}
          />
          }
        </div>
      </Card.Body>
    </Card>
  );
}


export default ProductItem;