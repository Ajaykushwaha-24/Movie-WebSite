import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import '../App.css';
import './nav.css';
import movie_icon from '../assets/movie_icon.png';

function MyNavbar({ searchText, setSearchText, onSearch }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Nav">
      <Navbar
        expand="lg"
        fixed="top"
        className={`app-navbar ${scrolled ? 'app-navbar--scrolled' : ''}`}
      >
        <Container fluid className="px-3 px-lg-5">
          <Navbar.Brand href="#home" className="brand d-flex align-items-center gap-2">
            <img src={movie_icon} alt="logo" className="brand-icon" />
            <span className="brand-text">
              Movie<span className="brand-accent">Flix</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
            {typeof searchText === 'string' && (
              <Form
                className="d-flex search-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSearch();
                }}
              >
                <div className="search-wrap">
                  <i className="bi bi-search search-icon">🔍</i>
                  <Form.Control
                    type="search"
                    placeholder="Search movies, shows..."
                    aria-label="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="search-input"
                  />
                </div>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
