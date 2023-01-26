import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import '../../css/loginform.css';
import axios from "axios"; 
import React, { useState } from "react";
import { handleForgotPassword } from '../../api/login.js';


function LoginForm(props){

    axios.defaults.withCredentials = true;

    const [loginStatus, setLoginStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //get info from form
        const form = e.currentTarget; 
        let email = form.email.value;
        let password = form.password.value;
        console.log(email);

        axios.post(`${process.env.REACT_APP_SERVER_ROUTE}/login`, 
            {
                email: email,
                password: password
        }).then((response) => {
            console.log(response)

            //if successful login redirect
            if(response.data.message){ 
                setLoginStatus(response.data.message); //error message
                console.log('failed');
            }else{//if its successful
                setLoginStatus(response.data[0].fname);
                props.setIsLoggedIn(true);
            }
        });
    }



    return(
        <div className='login-form-holder'> 
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className='email'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="johnnyappleseed@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className='password'>Password</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="message"> 
                    <Form.Label className='failed-login'> {loginStatus} </Form.Label>
                </Form.Group>
                <div className='buttons-div'> 
                    <Button variant='warning' onClick={() => handleForgotPassword(props.setModalShow)}> Forgot Password</Button>
                    <Button type="submit" variant='primary'> Login </Button>
                </div>
            </Form>
        </div>
        
    )
}

export default LoginForm;