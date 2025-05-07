import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/b1.jpg";
import img2 from "../images/b2.jpg";
import img3 from "../images/b3.jpg";
import myimg from "../images/slider-bg (1).jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Header from './header';
const Home=()=>{
    return(
        <>
        <div id="Carousel">
<Carousel>
      <Carousel.Item>
      <img src={myimg} width='100%' height='500px' />    
    <Carousel.Caption>
    <h1>Best Jewellery<br/>
    Collection </h1>
    
          <h3>It is a long established fact that<br/> a reader willbe distracted by<br/> the readable content of a page<br/> when looking at its layout.<br/> The point of using Lorem

</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} width='100%' height='500px' /> 
              <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} width='100%' height='500px'/> 
              <Carousel.Caption>
              <h3>third  slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <h1>LATEST PRODUCT</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




    <footer id="ftr" >
            <center><h5>
            Best Jewellery Collection
            </h5></center>
            </footer>
    </>
        </>

    )
}
export default Home;