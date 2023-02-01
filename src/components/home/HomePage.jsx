import NavBar from "../NavBar";
import HomePageCarousel from "./HomePageCarousel";
import shoesWallpaper from '../../images/shoes.png';
import '../../css/home-page.css';

function HomePage(){ 

    return( 
        <> 
            <NavBar> </NavBar>
            <h3 style={{color: "black", margin: "1%"}}> Featured Collections </h3> 
            <div className="carousel-container"> 
                <HomePageCarousel> </HomePageCarousel>
            </div> 
            <div className="shoes"> </div>
        </> 
    )
}

export default HomePage;