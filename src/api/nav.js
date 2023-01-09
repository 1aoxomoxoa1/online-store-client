export function searchProductFromAnywhere(event, navigate){
    let searchQuery = event.target.form[0].value;
    sessionStorage.setItem("search", searchQuery);
    navigate('/products');
}