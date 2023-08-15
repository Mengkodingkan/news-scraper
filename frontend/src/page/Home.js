import React, { useState, useEffect } from 'react';
import Sidebar from "../component/Sidebar";
import Carousel from "../component/Carousel";
import LatestNews from "../component/LatestNews";
import Metropolis from "../component/Metropolis";
import { Home } from '../services/home.service';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Home().then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('error fetching data:', error);
    })
  }, []);

  return (
    <>
      <div className="home-contents">
        <div className="container">
          {data && (
            <>
              <Carousel headline={data.headline} />
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

export default HomePage;
