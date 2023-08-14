import img from '../img/2.jpg';

const SidebarDetail = () => {
    return(
        <div className="sidebar-detial-contents">
            <div className="title">
                <h5>Berita Terbaru</h5>
            </div>
            <div className="card-container">
                {/* looping for news */}
                <div className="card">
                    <img src={img} alt="" />
                    <div className='desc'>
                        <p className='title'>Anne Klaim Keberhasilan Purwakarta</p>
                        <p>Mang Asep - 29 Juli 2023</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className='desc'>
                        <p className='title'>Anne Klaim Keberhasilan Purwakarta</p>
                        <p>Mang Asep - 29 Juli 2023</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className='desc'>
                        <p className='title'>Anne Klaim Keberhasilan Purwakarta</p>
                        <p>Mang Asep - 29 Juli 2023</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <div className='desc'>
                        <p className='title'>Anne Klaim Keberhasilan Purwakarta</p>
                        <p>Mang Asep - 29 Juli 2023</p>
                    </div>
                </div>
                {/* end of looping */}
            </div>
        </div>
    )
}

export default SidebarDetail;