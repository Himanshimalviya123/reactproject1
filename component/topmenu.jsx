import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const TopMenu=()=>{
    return(
        <>
        <Navbar  id="top">
        <Container>
          <Navbar.Brand href="#home"id="bar" ></Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="home" id="nav1">Home</Nav.Link>
            <Nav.Link as={Link} to="home" id="nav">Women Western</Nav.Link>
            <Nav.Link as={Link} to="home" id="nav">Menswear</Nav.Link>
            <Nav.Link as={Link} to="home" id="nav">Jewellery</Nav.Link>
          
            
            
          </Nav>
        </Container>
      </Navbar>
          
        </>
    )
}
export default TopMenu;
