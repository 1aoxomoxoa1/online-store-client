import axios from "axios";

//this gets the product details for a certain id of a product
export  async function getProductDetails(setProductDetails){
    console.log('entered product details page');
    let url = window.location.href;
    const re = new RegExp('http://localhost:3000/products/');
    let productId = url.replace(re, "");
    let response = await axios.get(`http://localhost:3200/products/${productId}`);
    console.log(response);
    setProductDetails(response.data[0]);
}

//this handles the state of quantity when it is changed from the dropdown
export function quantityChange(event, setQuantity){ 
    let selectedIndex = event.target.options.selectedIndex;
    let quantity = Number((event.target.options[selectedIndex].innerText));
    setQuantity(quantity);
}

