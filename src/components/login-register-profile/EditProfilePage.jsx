import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../css/edit-form.css';
import {useState} from 'react';
import { getUserDetailsEdit, saveEditedUserDetails } from "../../api/profile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProfilePage(){

    //so that this page can access the session
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();


    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        let userDetails = getUserDetailsEdit(setUserDetails);        
    }, [])

    return( 
        <div> 
            <h3 style={{margin: "2%"}}> Edit Here </h3> 
            <div className="edit-form-holder">
                <Form>
                    <Form.Group className="mb-3" controlId="fname">
                        <Form.Label className='fname'>First Name </Form.Label>
                        <Form.Control type="text" className='fname' placeholder={`${userDetails.fname}`} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lname">
                        <Form.Label className='lname'>Last Name</Form.Label>
                        <Form.Control type="text" className='lname' placeholder={`${userDetails.lname}`} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className='email'>Email address</Form.Label>
                        <Form.Control type="email" className='email' placeholder={`${userDetails.email}`} />
                    </Form.Group>
                    <Form.Group controlId="profilePic" className="mb-3">
                        <Form.Label>Insert Photo URL </Form.Label>
                        <Form.Control type="text" placeholder={`${userDetails.profile_pic}`}/>
                    </Form.Group>
                    <div className="flex-buttons"> 
                        <Button variant='primary' className='reg-button' onClick={() => navigate('/profile')}> Cancel </Button>
                        <Button type="submit" variant='primary' className='reg-button' onClick={(event) => saveEditedUserDetails(event, userDetails, navigate)} > Save </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default EditProfilePage;