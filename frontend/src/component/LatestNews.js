import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const sliderRef = useRef(null);

  const prev = () => {
    const slider = document.querySelector('.slider-2');
    let containerDimensions = slider.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    slider.scrollLeft -= containerWidth;
  }

  const next = () => {
      const slider = document.querySelector('.slider-2');
      let containerDimensions = slider.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      slider.scrollLeft += containerWidth;
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/home')
      .then(response => {
        const latestNewsData = response.data.data.berita_terbaru;
        setLatestNews(latestNewsData);
      })
      .catch(error => {
        console.error('Error fetching latest news:', error);
      });
  }, []);

  return (
    <div className="latest-news-contents">
      <div className="title">
        <div className="line"></div>
        <p>Berita Terbaru</p>
        <div className="line"></div>
      </div>
      <div className="slider-2" ref={sliderRef}>
        {latestNews.map(newsItem => (
          <div className="card" key={newsItem.link}>
            <img src={newsItem.thumbnail} alt="test" />
            <div className="desc">
              <Link to={`/detail/${newsItem.endpoint}`} className="anchor">
                {newsItem.title}
              </Link>
              <p>{newsItem.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button onClick={prev}><i className="bi bi-chevron-left"></i></button>
        <button onClick={next}><i className="bi bi-chevron-right"></i></button>
      </div>
    </div>
  );
}

export default LatestNews;
