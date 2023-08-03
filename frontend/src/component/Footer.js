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
              <p>Metropolis</p>
              <p>10000</p>
            </div>
            <div className="item">
              <p>Radar Purwakarta</p>
              <p>9000</p>
            </div>
            <div className="item">
              <p>Headline</p>
              <p>8000</p>
            </div>
            <div className="item">
              <p>Gerbang Sekolah</p>
              <p>7000</p>
            </div>
            <div className="item">
              <p>Klari</p>
              <p>6000</p>
            </div>
            <div className="item">
              <p>Radar Cikampek</p>
              <p>5000</p>
            </div>
            <div className="item">
              <p>Cilamaya</p>
              <p>5000</p>
            </div>
            <div className="item">
              <p>Dengklok</p>
              <p>5000</p>
            </div>
            <div className="item">
              <p>Teluk Jambe</p>
              <p>5000</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
