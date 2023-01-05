import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { clickFilter, clickSort } from '../../api/product-nav.js';

function ProductsNav({setSort, setFilter}) {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Sort By" id="navbarScrollingDropdown" onClick={(event) => clickSort(event, setSort)}>
              <NavDropdown.Item id={1} >None</NavDropdown.Item>
              <NavDropdown.Item id={2} >Price: High to Low</NavDropdown.Item>
              <NavDropdown.Item id={3} >
                Price: Low to High
              </NavDropdown.Item>
              <NavDropdown.Item  id={4} >
                Name: A -- Z
              </NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="Filter" onClick={(event) => clickFilter(event, setFilter)} id="navbarScrollingDropdown">
              <NavDropdown.Item id={1} >All</NavDropdown.Item>
              <NavDropdown.Item id={2}>
                Casual
              </NavDropdown.Item>
              <NavDropdown.Item id={3}>
               Formal
              </NavDropdown.Item>       
              <NavDropdown.Item id={4}>
               Football
              </NavDropdown.Item>     
              <NavDropdown.Item id={5}>
               Running
              </NavDropdown.Item>       
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProductsNav;
