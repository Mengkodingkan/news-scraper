import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const LatestNews = ( {latestNews} ) => {
  const sliderRef = useRef(null);


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
        {latestNews.map((newsItem) => (
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
