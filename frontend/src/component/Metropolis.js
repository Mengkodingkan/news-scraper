// metropolis.js
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Metropolis = () => {
  const [metropolisNews, setMetropolisNews] = useState([]);
  const sliderRef = useRef(null);

  const prev = () => {
    const slider = sliderRef.current;
    if (slider) {
      let containerDimensions = slider.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
      slider.scrollLeft -= containerWidth;
    }
  }

  const next = () => {
    const slider = sliderRef.current;
    if (slider) {
      let containerDimensions = slider.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
      slider.scrollLeft += containerWidth;
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/home')
      .then(response => {
        const metropolisNewsData = response.data.data.metropolis;
        setMetropolisNews(metropolisNewsData);
      })
      .catch(error => {
        console.error('Error fetching Metropolis news:', error);
      });
  }, []);

  return (
    <div className="metropolis-contents">
      <div className="slider-3" ref={sliderRef}>
        {metropolisNews.length > 0 ? (
          metropolisNews.map((news, index) => (
            <div className="card" key={index}>
              <img src={news.thumbnail} alt="" />
              <div className="desc">
                <Link to={news.link} className="anchor">{news.title}</Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading metropolis news...</p>
        )}
      </div>
      <div className="pagination-container">
        <button onClick={prev}><i className="bi bi-chevron-left"></i></button>
        <button onClick={next}><i className="bi bi-chevron-right"></i></button>
      </div>
    </div>
  );
}

export default Metropolis;
