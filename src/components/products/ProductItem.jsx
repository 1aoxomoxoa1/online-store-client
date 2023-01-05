import wishlist from "../../images/wishlist.png"
import activeWish from "../../images/active_wishlist.png";
import '../../css/productitem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductItem(props) {

  //need axios.defaults.withCredentials to allow page to access the stored session
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  //this handles button click to send user to product details page
  function sendToProductDetails(event){
    let id = event.target.id;
    navigate(`/products/${id}`);
  }

  //this handles adding product when heart is pressed to the DB and re rendering
  async function addToWishlist(event){
    console.log('within')
    let productId = event.target.id; 
    let loggedInResponse = await axios.get("http://localhost:3200/login");
    let userId;

    console.log(loggedInResponse);

    //if user is logged in then set the userID
    if(loggedInResponse.data.loggedIn === false){
      props.setModalShow(true);
    }else{ 
      userId = loggedInResponse.data.user[0].ID; 

      axios.post("http://localhost:3200/wishlist", 
      {
        userId: userId,
        productId: productId
      }).then((response) => {
        props.setWishListItems([...props.wishListItems, Number(productId)]);
      });
    }
  }

  async function removeFromWishList(event){
    let productId = event.target.id; 
    let loggedInResponse = await axios.get("http://localhost:3200/login");
    let userId;

    //if user is logged in then set the userID
    if(loggedInResponse.data.loggedIn === true){
      userId = loggedInResponse.data.user[0].ID; 

      let deleteFromWishlist = await axios.delete(`http://localhost:3200/wishlist?userId=${userId}&productId=${productId}`);
      console.log('deleted')
      let newWishlist = [...props.wishListItems].filter(id => id !== Number(productId));
      props.setWishListItems(newWishlist);
    }
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
            removeFromWishList(event)}
          }/>
          :<img src={wishlist} id={props.productID} alt="wishlist" width={"50px"} height={"50px"} onClick={(event) => addToWishlist(event)}/>
          }
        </div>
      </Card.Body>
    </Card>
  );
}


export default ProductItem;