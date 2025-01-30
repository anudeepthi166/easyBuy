import Carousel from "../Carousel/Carousel";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import './Home.css'
function Home(){
    return(
        <div className="home">
            <div className="nav-bar"><NavBar/></div>
            <div className="menu pt-2"><Menu/></div>
            <div className="home-carousel"><Carousel/></div>
        </div>
    )
}

export default Home;