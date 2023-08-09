import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../component/Sidebar";
import Carousel from "../component/Carousel";
import LatestNews from "../component/LatestNews";
import Metropolis from "../component/Metropolis";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/api/home")
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className="home-contents">
                <div className="container">
                    {data && (
                        <>
                            <Carousel />
                            <div className="line"></div>
                            <LatestNews latestNews={data.berita_terbaru} />
                            <Metropolis metropolis={data.metropolis} />
                        </>
                    )}
                </div>
            </div>
            <Sidebar />
        </>
    );
}

export default Home;
