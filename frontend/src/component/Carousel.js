import { Link } from "react-router-dom";
import React, { useRef } from 'react';


const Carousel = ({ headline }) => {
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
        <>
          <div className="slider" ref={sliderRef}>
            {headline.map((item) => (
              <div className="card" key={item.link}>
                <img src={item.thumbnail} alt="" />
                <div className="card-content">
                  <p>{item.title}</p>
                  <p>{item.author}</p>
                  <p>{item.date}</p>
                </div>
                <Link to={`/detail/${item.endpoint}`} className="anchor"></Link>
              </div>
            ))}
          </div>
          <div className="pagination-container">
            <button onClick={next}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button onClick={prev}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </>
      );
    };
    
export default Carousel;