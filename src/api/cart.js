import axios from "axios"

//this function retrieves the cart products (ONLY IDS & QUANTITIES) for user id
export async function getCartProducts(id){
    let cartProducts = await axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/cart/${id}`);
    return cartProducts.data;
}

//this function helps to map the product objects together to make one good for display in cart
function mapDetails(element, products){
    let id = element.ID;
    let productIdQuantity = products.find(product => product.product_id === id);
    let productDetailsWithQty = {
        ...element, 
        quantity: productIdQuantity.quantity
    }
    return productDetailsWithQty;
}


export async function getCartToDisplay(products){
    let productIds = products.map(item => item.product_id);
    let cartProductsDetails = await axios.post(`${process.env.REACT_APP_SERVER_ROUTE}/products`, 
        {
            range: productIds
        }
    );

    cartProductsDetails = cartProductsDetails.data;
    let productDetailsWithQuantities = cartProductsDetails.map(element => mapDetails(element, products))
    return productDetailsWithQuantities;
}

export function calculateTotal(cart){
    let total = 0;
    for(let item of cart){
        total += item.unit_price * item.quantity;
    }
    return total;
}