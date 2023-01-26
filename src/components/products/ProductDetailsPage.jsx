import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import '../../css/productdetailpage.css';
import { Button } from "react-bootstrap";
import { getProductDetails, quantityChange, handleAddToCart } from "../../api/product-details";
import axios from "axios";
import LoginModal from "../modals/LoginModal";
import AddedToCartModal from "../modals/AddedToCartModal";

function ProductDetailsPage(props){

    const [productDetails, setProductDetails] = useState([]);
    const [userId, setUserId] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [cartModalShow, setCartModalShow] = useState(false);

    useEffect(() => {
       getProductDetails(setProductDetails);
    }, [])

    console.log(productDetails);


    return(
        <>
            <NavBar> </NavBar>
            {(productDetails === [])
            ?<h1> Product Details Loading </h1> 
            :
            <div className="container"> 
                <div className="product-details"> 
                    <div className="image-div">
                        <img src={productDetails.image_url}  width={"50%"}/>  
                    </div>
                    <div className="desc"> 
                        <div className="row">
                            <h3> {productDetails.product_name} </h3>
                            <h3> ${productDetails.unit_price} </h3>
                        </div>
                        <div className="row">
                            <h5> Brand: {productDetails.brand} </h5>
                            <h5> Category: <span style={{color: 'red'}}> {productDetails.category} </span> </h5>
                        </div>
                        <div className="row flex-row">
                            <select name="quantity" id="quantity" onChange={(event) => quantityChange(event, setQuantity)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <Button variant="primary" style={{width: "50%"}} onClick={() => handleAddToCart(productDetails.ID, quantity, setLoginModalShow, setCartModalShow)}> Add to Cart </Button>
                        </div> 
                    </div>
                    <LoginModal show={loginModalShow} onHide={() => setLoginModalShow(false)}>
                    </LoginModal>
                    <AddedToCartModal show={cartModalShow} onHide={() => setCartModalShow(false)}>
                    </AddedToCartModal>
            </div>
            </div>
            }
        </>
    )
}

export default ProductDetailsPage;