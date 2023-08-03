import { Link } from "react-router-dom";

const dropdownActive = () => {
    const menuDropdown = document.querySelector('.menu-dropdown');
    menuDropdown.classList.toggle('active');
}

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-top">
                    <div className="container">
                        <h5>NEWS SCRAPER</h5>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="nav-bottom">
                    <div className="container">
                        <Link to="/" className="anchor">Home</Link>
                        <div className="dropdown">
                            <div className="top menu-dropdown">
                                <Link to="/" className="anchor">Metropolis</Link>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                            <div className="bottom"></div>
                        </div>
                        <Link to="/" className="anchor">Purwakarta</Link>
                        <Link to="/" className="anchor">Cikampek</Link>
                        <Link to="/" className="anchor">Klari</Link>
                        <Link to="/" className="anchor">Cilamaya</Link>
                        <Link to="/" className="anchor">Dengklok</Link>
                        <Link to="/" className="anchor">Telukjambe</Link>
                        <Link to="/" className="anchor">Gerbang Sekolah</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;