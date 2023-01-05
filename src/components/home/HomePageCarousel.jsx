import Carousel from 'react-bootstrap/Carousel';
import formalBackground from '../../images/formal.jpeg';
import athleticBackground from '../../images/athletic.jpeg';
import sneakerheads from '../../images/sneakerheads.jpeg';
import '../../css/homepagecarousel.css';

function HomePageCarousel() {
  return (
    <Carousel className='d-flex justify-content-center'>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={formalBackground}
          alt="First slide"
          style={{objectFit: 'cover', objectPosition: 'center', height: "50vh", overflow: "hidden"}}
        />
        <Carousel.Caption className='caption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={athleticBackground}
          alt="Second slide"
          style={{objectFit: 'cover', objectPosition: 'center', height: "50vh", overflow: "hidden"}}
        />
        <Carousel.Caption className='caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={sneakerheads}
          alt="Third slide"
          style={{objectFit: 'cover', objectPosition: 'center', height: "50vh", overflow: "hidden"}}

        />

        <Carousel.Caption className='caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageCarousel;