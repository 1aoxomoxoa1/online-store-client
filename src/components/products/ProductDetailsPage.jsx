import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import '../../css/productdetailpage.css';
import { Button } from "react-bootstrap";
import { getProductDetails } from "../../api/product-details";

function ProductDetailsPage(props){

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
       getProductDetails(setProductDetails);
    }, [])

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
                            <select name="quantity" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <Button variant="primary" style={{width: "50%"}}> Add to Cart </Button>
                        </div> 
                    </div>
            </div>
            </div>
            }
        </>
    )
}

export default ProductDetailsPage;