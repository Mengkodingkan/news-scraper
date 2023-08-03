import React from "react";
import { Link } from "react-router-dom";
import newsImage from '../img/news-image.jpg';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="column">
            <div className="item">
              <h5>PICKS EDITOR</h5>
            </div>
            <div className="item">
              <img src={newsImage} alt="" />
              <div className="desc">
                <Link to="/" className="title">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p className="date">27 Juli 2023</p>
              </div>
            </div>
            <div className="item">
              <img src={newsImage} alt="" />
              <div className="desc">
                <Link to="/" className="title">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p className="date">27 Juli 2023</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <h5>POSTING POPULER</h5>
            </div>
            <div className="item">
              <img src={newsImage} alt="" />
              <div className="desc">
                <Link to="/" className="title">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p className="date">27 Juli 2023</p>
              </div>
            </div>
            <div className="item">
              <img src={newsImage} alt="" />
              <div className="desc">
                <Link to="/" className="title">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p className="date">27 Juli 2023</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <h5>KATEGORI POPULER</h5>
            </div>
            <div className="item">
              <img src={newsImage} alt="" />
              <div className="desc">
                <Link to="/" className="title">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p className="date">27 Juli 2023</p>
              </div>
            </div>
            <div className="item">
              <img src={newsImage} alt="" />
              <div className="desc">
                <Link to="/" className="title">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p className="date">27 Juli 2023</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
