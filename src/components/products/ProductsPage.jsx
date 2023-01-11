import NavBar from "../NavBar";
import ProductsNav from "./ProductsNav";
import ProductItem from "./ProductItem";
import '../../css/productspage.css'
import { useEffect, useState } from "react";
import axios from 'axios'
import Pagination from 'react-bootstrap/Pagination';
import LoginModal from "../modals/LoginModal";
import {getProductsDb, getWishlistProductsDb, handlePagination} from '../../api/products.js'

function ProductsPage(){

    //need axios.defaults.withCredentials to allow page to access the stored session
    axios.defaults.withCredentials = true;

    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("none");
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");

    const [productsShown, setProductsShown] = useState([]);
    const [wishListItems, setWishListItems] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    //this function is called each time one of state variables (search queries) changes
    async function getProducts(){
        let products = await getProductsDb(page, filter, sort, search);
        console.log(products);
        setProductsShown(products);
    }

    //call getProducts() when page loads first, setting the products shown
    useEffect(() => {
        getProducts();
        getWishlistProductsDb(setWishListItems);
        console.log('call to get products completed');
    }, [page, filter, sort, search])

    useEffect(() => {
        getProducts();
    }, [wishListItems]);

    return(
        <div> 
            <NavBar> </NavBar>
            <h2 style={{margin: "2%"}}> PRODUCTS </h2>
            <div className="products-container"> 
            <ProductsNav setSort={setSort} setFilter={setFilter} setSearch={setSearch}> </ProductsNav>
            
            <div className="flex-container"> 
                {productsShown.map((product) => 
                    <ProductItem
                    key = {product.ID}
                    productID = {product.ID}
                    url={product.image_url} 
                    name={product.product_name}
                    price={product.unit_price}
                    inWishlist = {wishListItems.includes(product.ID)} //true if is in wishlist for user, false if not
                    setWishListItems = {setWishListItems}
                    wishListItems = {wishListItems}
                    setModalShow={setModalShow}> </ProductItem>
                )}   
            </div>
                <Pagination className="paginator" onClick={(event) => handlePagination(event, page, setPage)}>
                    <Pagination.Item id="prev"> {"<"} </Pagination.Item>
                    <Pagination.Item id="1" active={(page + 1 === 1) ? true : false}>{1}</Pagination.Item>
                    <Pagination.Item id="2" active={(page + 1 === 2) ? true : false}>{2}</Pagination.Item>
                    <Pagination.Item id="3" active={(page + 1 === 3) ? true : false}>{3}</Pagination.Item>
                    <Pagination.Item id="next"> {">"} </Pagination.Item>
                </Pagination>
            </div> 
            <LoginModal show={modalShow} onHide={() => setModalShow(false)}>
            </LoginModal>
        </div>
    )
}

export default ProductsPage