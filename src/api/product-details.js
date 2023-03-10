import axios from "axios";

//this gets the product details for a certain id of a product
export  async function getProductDetails(setProductDetails){
    console.log('entered product details page');
    let url = window.location.href;
    console.log(`${process.env.REACT_APP_FRONT_END_URL_PRODUCTS}`);
    console.log(`${process.env.REACT_APP_SERVER_ROUTE}`);
    const re = new RegExp(`${process.env.REACT_APP_FRONT_END_URL_PRODUCTS}`);
    let productId = url.replace(re, "");
    console.log('re below');
    console.log(re);
    let response = await axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/products/${productId}`);
    console.log(response);
    setProductDetails(response.data[0]);
}

//this handles the state of quantity when it is changed from the dropdown
export function quantityChange(event, setQuantity){ 
    let selectedIndex = event.target.options.selectedIndex;
    let quantity = Number((event.target.options[selectedIndex].innerText));
    setQuantity(quantity);
}

export async function handleAddToCart(id, quantity=1, setLoginModalShow, setCartModalShow){
    let loginResponse = await axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/login`);
    if(loginResponse.data.loggedIn === false){
        setLoginModalShow(true);
    }else{ //if the user is loggedIn
        let userId = Number(loginResponse.data.user[0].ID)
        let productId = Number(id);
        console.log(quantity);

        let response = await axios.post(`${process.env.REACT_APP_SERVER_ROUTE}/cart`, 
            {
                userId: userId,
                productId: productId,
                quantity: quantity
            }
        );
        setCartModalShow(true);
    }
}