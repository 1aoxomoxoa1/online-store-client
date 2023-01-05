import NavBar from "../NavBar";
import HomePageCarousel from "./HomePageCarousel";
import shoesWallpaper from '../../images/shoes.png';
import '../../css/home-page.css';

function HomePage(){

    return( 
        <> 
            <NavBar> </NavBar>
            <div className="shoes"> </div>
            <h3 style={{color: "black"}}> Featured Collections </h3> 
            <div className="carousel-container"> 
            <HomePageCarousel> </HomePageCarousel>
            </div> 
        </> 
    )
}

export default HomePage;