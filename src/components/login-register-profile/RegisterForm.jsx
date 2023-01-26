import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import '../../css/registerform.css';
import axios from "axios"; 
import React, { useState, useRef} from "react";

function RegisterForm(props){

    const [registerMsg, setRegisterMsg] = useState("");
    const registerPar = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget; 
        
        console.log(form.fname);
        let fname = form.fname.value;
        let lname = form.lname.value;
        let email = form.email.value; 
        let password = form.password.value;
        let profilePic = form.profilePic.value; 

        axios.post(`${process.env.REACT_APP_SERVER_ROUTE}/register`, 
            {
                fname: fname, 
                lname: lname,
                email: email,
                password: password,
                profilePic: profilePic
        })
        .then((response) => {
            setRegisterMsg(response.data);
            registerPar.current.hidden = false;
        });        
    }

    return(
        <div className='register-form-holder'> 
            <p hidden={true} ref={registerPar} className="register-msg"> {registerMsg} </p> 
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="fname">
                    <Form.Label className='fname'>First Name </Form.Label>
                    <Form.Control type="text" className='fname' placeholder="Johnny" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lname">
                    <Form.Label className='lname'>Last Name</Form.Label>
                    <Form.Control type="text" className='lname' placeholder="Appleseed" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className='email'>Email address</Form.Label>
                    <Form.Control type="email" className='email' placeholder="johnnyappleseed@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className='password'>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Form.Group controlId="profilePic" className="mb-3">
                    <Form.Label>Insert Photo URL </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button type="submit" variant='primary' className='reg-button'> Register </Button>
            </Form>
        </div>
    )
}

export default RegisterForm;