import img from '../img/1.jpg';
import { Link } from "react-router-dom";

const prev = () => {
    const slider = document.querySelector('.slider');
    let containerDimensions = slider.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    slider.scrollLeft -= containerWidth;
}

const next = () => {
    const slider = document.querySelector('.slider');
    let containerDimensions = slider.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    slider.scrollLeft += containerWidth;
}

const Carousel = () => {

    return(
        <>
            <div className="slider">
                {/* Looping for card */}
                <div className='card'>
                    <img src={img} alt="" />
                    <Link to={'/detail'} className='anchor'></Link>
                </div>
                <div className='card'>
                    <img src={img} alt="" />
                    <Link to={'/detail'} className='anchor'></Link>
                </div>
                <div className='card'>
                    <img src={img} alt="" />
                    <Link to={'/detail'} className='anchor'></Link>
                </div>
                <div className='card'>
                    <img src={img} alt="" />
                    <Link to={'/detail'} className='anchor'></Link>
                </div>
                <div className='card'>
                    <img src={img} alt="" />
                    <Link to={'/detail'} className='anchor'></Link>
                </div>
                <div className='card'>
                    <img src={img} alt="" />
                    <Link to={'/detail'} className='anchor'></Link>
                </div>
                {/* end of looping */}
            </div> 
            <div className="pagination-container">
                <button onClick={next}><i className="bi bi-chevron-left"></i></button>
                <button onClick={prev}><i className="bi bi-chevron-right"></i></button>
            </div>
        </>
    )
}

export default Carousel;