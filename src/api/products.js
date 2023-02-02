import axios from "axios";

export async function getProductsDb(page, filter, sort, search){
    const response = await axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/products?page=${page}&filter=${filter}&sort=${sort}&search=${search}`);
    return response.data;
}

//**
//  * 
//  * @param {*} setWishListItems -- setter for the wishlistItems state tracking wishlist for a logged in user
//  */
export async function getWishlistProductsDb(setWishListItems){
    const userResponse = await axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/login`);
    if(userResponse.data.loggedIn === false){
       return
    }else{ 
        let userId = userResponse.data.user[0].ID;
        const wishListResponse = await axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/wishlist/${userId}`);
        let items = wishListResponse.data.map(item => item.product_id);
        console.log(items);
        setWishListItems(items);
    }
}

// export function checkSessionStorage(){
//     let search = sessionStorage.getItem("search");
//     console.log(search);

//     if(search !== null){
//         // sessionStorage.removeItem("search");
//         return search;
//     }

//     return "";
// }


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