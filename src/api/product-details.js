import axios from "axios";

export  async function getProductDetails(setProductDetails){
    console.log('entered product details page');
    let url = window.location.href;
    const re = new RegExp('http://localhost:3000/products/');
    let productId = url.replace(re, "");
    let response = await axios.get(`http://localhost:3200/products/${productId}`);
    console.log(response);
    setProductDetails(response.data[0]);
}