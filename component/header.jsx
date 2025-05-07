import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header=()=>{ 
    return(
    <>
  <div id="nav">
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HEALET</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">SHOP</Nav.Link>     
            <Nav.Link href="#pricing">BLOG</Nav.Link>          
          </Nav>
        </Container>
      </Navbar>
      </div>
 
    </>

)}
export default Header;
