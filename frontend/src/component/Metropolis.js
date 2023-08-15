import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Metropolis = ( {metropolis} ) => {
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

  return (
    <div className="metropolis-contents">
      <div className="slider-3" ref={sliderRef}>
          {metropolis.map(news => (
            <div className="card" key={news.endpoint}>
              <img src={news.thumbnail} alt="" />
              <div className="desc">
                <Link to={`/detail/${news.endpoint}`} className="anchor">
                  {news.title}
                </Link>
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

export default Metropolis;
