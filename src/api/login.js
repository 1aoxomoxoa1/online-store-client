import axios from "axios";

//this shows the modal for the forgotPassword button
export function handleForgotPassword(setModalShow){
    setModalShow(true);
}

//this function will check for the validity of the email entered, return true if success
export async function sendToEmail(event, setSentMsg, setEmailFound){
    event.preventDefault();
    console.log(event);

    const email = event.target.form[0].value;

    const emailVerified = await axios.post(`${process.env.REACT_APP_SERVER_ROUTE}/forgotpass`, 
        {
            email: email
        }
    )

    if(emailVerified.data.length > 0){
        setEmailFound(true);
        console.log('entered');
    }else{
        setEmailFound(false);
    }

    setSentMsg(false);

    console.log(emailVerified)



}