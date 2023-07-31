import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h5>Pick Editors</h5>
            <div className="footer-item">
              <img src="url_gambar1" alt="Editor 1" />
              <div className="footer-item-info">
                <Link to="/">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p>27 Juli 2023</p>
              </div>
            </div>
            <div className="footer-item">
              <img src="url_gambar2" alt="Editor 2" />
              <div className="footer-item-info">
                 <Link to="/">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p>27 Juli 2023</p>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h5>Posting Popular</h5>
            <div className="footer-item">
              <img src="url_gambar3" alt="Posting 1" />
              <div className="footer-item-info">
                <Link to="/">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p>27 Juli 2023</p>
              </div>
            </div>
            <div className="footer-item">
              <img src="url_gambar4" alt="Posting 2" />
              <div className="footer-item-info">
                <Link to="/">XL Axiata Alihkan UMB *123# ke *808#Tetap Upayakan Kenyamanan Pelanggan</Link>
                <p>27 Juli 2023</p>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h5>Kategori Popular</h5>
            <div className="footer-category">
              <Link to="/">Metropolis</Link>
              <p>10000</p>
            </div>
            <div className="footer-category">
              <Link to="/">Radar Purwakarta</Link>
              <p>9000</p>
            </div>
            <div className="footer-category">
              <Link to="/">Headline</Link>
              <p>8000</p>
            </div>
            <div className="footer-category">
              <Link to="/">Gerbang Sekolah</Link>
              <p>7000</p>
            </div>
            <div className="footer-category">
              <Link to="/">Klari</Link>
              <p>6000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
