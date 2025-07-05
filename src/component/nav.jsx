import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import '../App.css';
import movie_icon from '../assets/movie_icon.png'

function MyNavbar({ searchText, setSearchText, onSearch }) {
  return (
    <div className='Nav'>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
  <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
  <Button variant="outline-success" type="submit">Search</Button>
</Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
