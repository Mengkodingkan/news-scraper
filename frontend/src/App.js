// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// bootstrap icons
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

// css
import './main.css';

import './App.css';

import Navbar from './component/Navbar';
import Home from './page/Home';
import Detail from './page/Detail';
import Category from './page/category';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import React, { useState, useEffect } from 'react';
import { Home as fetchHomeData } from './services/home.service';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchHomeData().then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('error fetching data:', error);
    })
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Category' element={<Category/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
        </Routes>
        <Footer
          picks_editor={data?.picks_editor || []}
          posting_populer={data?.posting_populer || []}
          kategori={data?.kategori || []}
          />
      </BrowserRouter>
    </>
  );
}

export default App;
