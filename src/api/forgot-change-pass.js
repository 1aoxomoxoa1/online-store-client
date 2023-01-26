import axios from "axios";


//this function gets the email query param from the change password page and returns it as a string
export function getEmailQueryParam(){
    const url = window.location.href;
    const email = new URL(window.location.href).searchParams.get('email');
    console.log(email);
    return email;
}

export async function changePassword(event, setFormMsg, email){
    event.preventDefault();
    let form = event.target.form;
    let newPass = form.newpass.value;
    let confirmPass = form.confirmpass.value;

    //if new password is confirmed, save it to db
    if(newPass === confirmPass){
        setFormMsg("Saving new password");
        let response = await axios.post(`${process.env.REACT_APP_SERVER_ROUTE}/changepass`, 
            {
                password: newPass,
                email: email 
            }
        )
        setFormMsg(response.data);

    }else{//else set in 
        setFormMsg("Please make sure the passwords match");
    }
}

