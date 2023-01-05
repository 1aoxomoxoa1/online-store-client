
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import profilePic from '../images/profile-removebg-preview.png';
import wishList from '../images/wishlist.png';
import cart from '../images/cart.png';
import '../css/navbar.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Shoe Stop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-item' href="/">Home</Nav.Link>
            <Nav.Link className='nav-item' href="/products"> Shop </Nav.Link>
            <Nav.Link href="/profile">
              <img src={profilePic} alt="background" width={50} height={50}/> 
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-field"
              aria-label="Search"
            />
            <Button variant="outline-success" className='search-bar'>Search</Button>
            <Nav.Link className='nav-item wishlist' href="/wishlist"> 
                <img src={wishList} alt="wishlist" width={"50px"} height={"50px"}/>
            </Nav.Link>
            <Nav.Link className='nav-item' href="/products"> 
                <img src={cart} alt="cart" width={"50px"} height={'50px'} />
            </Nav.Link>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
