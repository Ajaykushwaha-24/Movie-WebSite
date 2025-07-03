import { Navbar, Nav, Container,Form,Button} from 'react-bootstrap';
import'../App.css'



 function MyNavbar(){
    return(
       <div className='Nav'>  
         <Navbar className="bg-body-tertiary">
                  <Container fluid>
                    <Navbar.Brand href="#">Movie Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                      </Nav>
                      <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </div>    
    );
 }
  export default MyNavbar;