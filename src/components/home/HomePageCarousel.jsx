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
          <h3>Formal Shoes</h3>
          <p>Shop from our selection of formal shoes.</p>
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
          <h3>Athletic Shoes</h3>
          <p>Shop from our selection of athletic shoes to get your blood pumping</p>
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
          <h3>Sports</h3>
          <p>
            Shop from our assortment of shoes for soccer and other sports.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageCarousel;