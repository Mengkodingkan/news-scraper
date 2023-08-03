import { Link } from "react-router-dom";
import img from '../img/3.jpg';

const prev = () => {
    const slider = document.querySelector('.slider-3');
    let containerDimensions = slider.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    slider.scrollLeft -= containerWidth;
}

const next = () => {
    const slider = document.querySelector('.slider-3');
    let containerDimensions = slider.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    slider.scrollLeft += containerWidth;
}

const Metropolis = () => {
    return(
        <>
            <div className="metropolis-contents">
                <div className="title">
                    <div className="line"></div>
                    <p>Metropolis</p>
                    <div className="line"></div>
                </div>
                <div className="slider-3">
                    {/* looping for page */}
                    <div className="page">
                        {/* Looping for card */}
                        <div className="card">
                            <img src={img} alt="" />
                            <div className="desc">
                                <Link to="/detail" className="anchor">Anne Klaim Keberhasilan Purwakarta</Link>
                                <p>27 Juli 2023</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img} alt="" />
                            <div className="desc">
                                <Link to="/detail" className="anchor">Anne Klaim Keberhasilan Purwakarta</Link>
                                <p>27 Juli 2023</p>
                            </div>
                        </div>
                        {/* end of looing */}
                    </div>
                    <div className="page">
                        <div className="card">
                            <img src={img} alt="" />
                            <div className="desc">
                                <Link to="/detail" className="anchor">Anne Klaim Keberhasilan Purwakarta</Link>
                                <p>27 Juli 2023</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img} alt="" />
                            <div className="desc">
                                <Link to="/detail" className="anchor">Anne Klaim Keberhasilan Purwakarta</Link>
                                <p>27 Juli 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="card">
                            <img src={img} alt="" />
                            <div className="desc">
                                <Link to="/detail" className="anchor">Anne Klaim Keberhasilan Purwakarta</Link>
                                <p>27 Juli 2023</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={img} alt="" />
                            <div className="desc">
                                <Link to="/detail" className="anchor">Anne Klaim Keberhasilan Purwakarta</Link>
                                <p>27 Juli 2023</p>
                            </div>
                        </div>
                    </div>
                    {/* end of looping */}
                </div>
                <div className="pagination-container">
                    <button onClick={prev}><i className="bi bi-chevron-left"></i></button>
                    <button onClick={next}><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
        </>
    )
}

export default Metropolis;