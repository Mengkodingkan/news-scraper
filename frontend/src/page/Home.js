// import { Link } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Carousel from "../component/Carousel";
import LatestNews from "../component/LatestNews";
import Metropolis from "../component/Metropolis";

const Home = () => {
    return(
        <>
            <div className="home-contents">
                <div className="container">
                    <Carousel/>
                    <div className="line"></div>
                    <LatestNews/>
                    <Metropolis/>
                </div>
            </div>

            <Sidebar/>
        </>
    )
}

export default Home;