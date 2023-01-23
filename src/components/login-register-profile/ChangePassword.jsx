import React, { useState } from "react";
import NavBar from "../NavBar";
import { getEmailQueryParam, changePassword } from "../../api/forgot-change-pass";
import { Button, Form } from "react-bootstrap";

function ChangePasswordPage(){

    const [email, setEmail] = useState(getEmailQueryParam());
    const [formMsg, setFormMsg] = useState("");

    return(
        <>
            <NavBar> </NavBar>
            <div> 
                <div style={{margin: "5%"}}>
                    <h2>Change Password</h2>  
                    <p> Strong password recommended. Do not use common words or names. </p>  
                </div>
                <div style={{margin: "5%"}}> 
                    <h4 style={{fontWeight: 900}}> Email </h4>
                    <h2> {email} </h2>
                </div>
                <div style={{width: "60%", margin: "0 auto"}}> 
                    <Form> 
                        <Form.Group className="mb-3" controlId="newpass">
                            <Form.Label className='new-pass'>New Password </Form.Label>
                            <Form.Control type="password" className='new-pass'  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="confirmpass">
                            <Form.Label className='new-pass'>Confirm New Password </Form.Label>
                            <Form.Control type="password" className='new-pass'  />
                        </Form.Group>
                        <p> {formMsg} </p>
                        <Button type="submit" onClick={(event) => changePassword(event, setFormMsg, email)}> Set Password </Button>
                    </Form>
                </div>

            </div> 
        </>
    )
}


export default ChangePasswordPage;

