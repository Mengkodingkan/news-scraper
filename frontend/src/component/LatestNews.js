import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home } from '../services/home.service';

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    Home().then(response => {
      setLatestNews(response.data.berita_terbaru);
    })
    .catch(error => {
      console.error('error fetching data:', error);
    })
  }, []);

  const prev = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft -= slider.offsetWidth;
    }
  };

  const next = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft += slider.offsetWidth;
    }
  };

  return (
    <div className="latest-news-contents">
      <div className="title">
        <div className="line"></div>
        <p>Berita Terbaru</p>
        <div className="line"></div>
      </div>
        <div className="slider-2" ref={sliderRef}>
        {latestNews.length > 0 ? (
          latestNews.map((newsItem) => (
            <div className="card" key={newsItem.link}>
              <img src={newsItem.thumbnail} alt="test" />
              <div className="desc">
                <Link to={`/detail/${newsItem.endpoint}`} className="anchor">
                  {newsItem.title}
                </Link>
                <p>{newsItem.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading Latest News...</p>
        )}
        </div>

      <div className="pagination-container">
        <button onClick={prev}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button onClick={next}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default LatestNews;
