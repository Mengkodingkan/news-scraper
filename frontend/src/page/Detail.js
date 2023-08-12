import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from '../component/Navbar';
import DetailContent from '../component/DetailContent';
import SidebarDetail from '../component/SidebarDetail';

const Detail = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className='detail-contents'>
                <div className='container'>
                    <div className='route'>
                        <Link to="/" className='anchor'>Beranda</Link> <i class="bi bi-chevron-right"></i> 
                        <Link to="/" className='anchor'>Metropolis</Link> <i class="bi bi-chevron-right"></i>
                        <Link to="/" className='anchor'>Headline</Link> <i class="bi bi-chevron-right"></i>
                        <Link to="/" className='anchor'>Produksi Beras Nutri Zinc Capai 7.109 Ton</Link>
                    </div>
                    <div className='main-contents'>
                        <DetailContent />
                        <SidebarDetail />
                    </div>
                </div>
            </div>

            <Sidebar />
        </>
    );
};

export default Detail;
