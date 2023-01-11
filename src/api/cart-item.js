import axios from "axios";


//this changes the quantity in the DB each time a cart-item quanity is changed
export async function updateQuantityDb(userId, productId, quantity){
    let success = await axios.put(`http://localhost:3200/cart`, 
        {
            userId: userId,
            productId: productId,
            quantity: quantity
        },
    );
}


//this function updates the cart states so the total rerenders each time quantity changes
export function updateFullCart(cart, setCart, productId, quantity){
    console.log(setCart);
    let obj = cart.find(element => element.ID === productId);
    if(obj){
        obj["quantity"] = quantity;
    }
    let updatedCart = [...cart];
    setCart(updatedCart);
}

export async function removeFromCart(cart, setCart, userId, productId){

    let success = await axios.delete(`http://localhost:3200/cart?userId=${userId}&productId=${productId}`);
    
    //take the removed product from the cart state
    let updatedCart = cart.filter(element => element.ID !== productId);
    console.log(updatedCart);
    setCart(updatedCart);
}