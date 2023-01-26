import axios from "axios";

axios.defaults.withCredentials = true;

export async function getUserDetailsEdit(setUserDetails){
    const user = await axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/login`);
    let details = user.data.user[0];   
    console.log(details);
    setUserDetails(details);
}

export async function saveEditedUserDetails(event, userDetails, navigate){
    event.preventDefault();
    const form = event.target.form;

    const fname = form.fname.value; 
    const lname = form.lname.value; 
    const email = form.email.value; 
    const photoUrl = form.profilePic.value; 
   
    try {
        let response = await axios.put(`${process.env.REACT_APP_SERVER_ROUTE}/register`, {
            fname: fname,
            lname: lname,
            email: email,
            photoUrl: photoUrl,
            id: userDetails.ID
        });
        console.log(response);
        if(response.data === 'success'){
            navigate('/profile');
        }
    } catch (error) {
        console.log(error);
    }

    

    



    console.log(typeof email);
    console.log(email ===  "")
}