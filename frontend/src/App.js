// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// bootstrap icons
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

// css
import './main.css';

import './App.css';

import Navbar from './component/Navbar';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
