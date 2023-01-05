import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import {Button} from 'react-bootstrap'
import '../../css/userprofile.css'
import axios from 'axios';

export default function UserProfile({user, setIsLoggedIn}) {  

  function signout(){
    axios.get('http://localhost:3200/logout')
      .then(response => {
        console.log('within')
        console.log(response);
        setIsLoggedIn(false);
        console.log(setIsLoggedIn);
    });
  }

  return (
    <div className="vh-100" style={{ backgroundColor: '#F4F4F4' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center w-100">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={user.profile_pic}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle> Welcome, {user.fname} {user.lname} </MDBCardTitle>
                    <MDBCardText> {user.email} </MDBCardText>
                    <div className="d-flex-wrap pt-1">
                      <Button className="w-100 cls-button">Edit</Button>
                      <Button className="w-100 cls-button" onClick={signout}>Sign out</Button>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}