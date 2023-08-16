import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ picks_editor, posting_populer, kategori }) => {
  return (
    <footer>
      <div className="container">
        {/* Picks Editor */}
        <div className="column">
          <div className="item">
            <h5>PICKS EDITOR</h5>
          </div>
          {picks_editor.map(item => (
            <div className="item" key={item.link}>
              <img src={item.thumbnail} alt="test" />
              <div className="desc">
                <Link to={`/detail/${item.endpoint}`} className="anchor">
                  {item.title}
                </Link>
                <p className="date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Posting Populer */}
        <div className="column">
          <div className="item">
            <h5>POSTING POPULER</h5>
          </div>
          {posting_populer.map(item => (
            <div className="item" key={item.link}>
              <img src={item.thumbnail} alt="test" />
              <div className="desc">
                <Link to={`/detail/${item.endpoint}`} className="anchor">
                  {item.title}
                </Link>
                <p className="date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kategori Populer */}
        <div className="column">
          <div className="item">
            <h5>KATEGORI POPULER</h5>
          </div>
          {kategori.map(item => (
            <div className="item" key={item.link}>
              <Link to={`/${item.endpoint}`} className="anchor">
                {item.title}
              </Link>
              <p>{item.count}</p>
            </div>
          ))}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
