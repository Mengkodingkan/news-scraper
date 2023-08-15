import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home } from '../services/home.service';

const Metropolis = () => {
  const [metropolisNews, setMetropolisNews] = useState([]);
  const sliderRef = useRef(null);

  const prev = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft -= containerWidth;
    }
  };

  const next = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft += containerWidth;
    }
  };

  useEffect(() => {
    Home().then(response => {
      setMetropolisNews(response.data.metropolis);
    })
    .catch(error => {
      console.error('error fetching data:', error);
    })
  }, []);

  return (
    <div className="metropolis-contents">
      <div className="slider-3" ref={sliderRef}>
        {metropolisNews.length > 0 ? (
          metropolisNews.map(news => (
            <div className="card" key={news.endpoint}>
              <img src={news.thumbnail} alt="" />
              <div className="desc">
                <Link to={`/detail/${news.endpoint}`} className="anchor">
                  {news.title}
                </Link>
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
