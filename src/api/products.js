import axios from "axios";

export async function getProductsDb(page, filter, sort){
    const response = await axios.get(`http://localhost:3200/products?page=${page}&filter=${filter}&sort=${sort}`);
    return response.data;
}

//**
//  * 
//  * @param {*} setWishListItems -- setter for the wishlistItems state tracking wishlist for a logged in user
//  */
export async function getWishlistProductsDb(setWishListItems){
    const userResponse = await axios.get("http://localhost:3200/login");
    if(userResponse.data.loggedIn === false){
       return
    }else{ 
        let userId = userResponse.data.user[0].ID;
        const wishListResponse = await axios.get(`http://localhost:3200/wishlist/${userId}`);
        let items = wishListResponse.data.map(item => item.product_id);
        console.log(items);
        setWishListItems(items);
    }
}


export function handlePagination(event, page, setPage){
    let id = event.target.id;
    if(id === 'prev'){
        if(page !== 0){
            let newPage = page - 1;
            return setPage(newPage);
        }
    }else if(id === 'next'){
        let newPage = page + 1;
        return setPage(newPage);
    }else{
        setPage(Number(id) - 1);
    }
}