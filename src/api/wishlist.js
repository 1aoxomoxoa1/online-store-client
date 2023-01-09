import axios from "axios";

//this handles adding product when heart is pressed to the DB and re rendering
export async function addToWishlist(event, num, wishListItems, setModalShow, setWishListItems){
    console.log('within')
    let productId = event.target.id; 
    let loggedInResponse = await axios.get("http://localhost:3200/login");
    let userId;

    console.log(num);
    console.log(loggedInResponse);
    console.log(wishListItems);

    //if user is logged in then set the userID
    if(loggedInResponse.data.loggedIn === false){
      setModalShow(true);
    }else{ 
      userId = loggedInResponse.data.user[0].ID; 

      axios.post("http://localhost:3200/wishlist", 
      {
        userId: userId,
        productId: productId
      }).then((response) => {
        let newWishListItems = [...wishListItems, Number(productId)];
        setWishListItems(newWishListItems);
      });
    }
}

export async function removeFromWishList(event, wishListItems, setWishListItems){
    let productId = event.target.id; 
    let loggedInResponse = await axios.get("http://localhost:3200/login");
    let userId;

    //if user is logged in then set the userID
    if(loggedInResponse.data.loggedIn === true){
      userId = loggedInResponse.data.user[0].ID; 

      let deleteFromWishlist = await axios.delete(`http://localhost:3200/wishlist?userId=${userId}&productId=${productId}`);
      console.log('deleted')
      let newWishlist = [...wishListItems].filter(id => id !== Number(productId));
      setWishListItems(newWishlist);
    }
}


//this function removes from the wishlist FROM THE WISHLIST PAGE
export async function removeFromWishList2(userId, productId, wishlist, setWishlist){

    console.log(wishlist);
    let deleteFromWishlist = await axios.delete(`http://localhost:3200/wishlist?userId=${userId}&productId=${productId}`);
    let newWishlist = wishlist.filter(object => object.ID !== productId);
    console.log(newWishlist);
    console.log('deleted')
    setWishlist(newWishlist);

}