import { Link } from "react-router-dom";

const dropdownActive = () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.add('active');
}

const dropdownNonActive = () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('active');
}

const hamburgerActive = () => {
    const sidebar_contents = document.querySelector('.sidebar-contents');
    sidebar_contents.classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-top">
                    <div className="container">
                        <h5>NEWS SCRAPER</h5>
                        <div className="hamburger" onClick={hamburgerActive}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="nav-bottom">
                    <div className="container">
                        <Link to="/" className="anchor">Home</Link>
                        <div className="dropdown" onMouseMove={dropdownActive} onMouseLeave={dropdownNonActive}>
                            <div className="top menu-dropdown">
                                <Link to="/" className="anchor">Metropolis</Link>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                            <div className="bottom">
                                <Link to="/" className="anchor">Headline</Link>
                                <Link to="/" className="anchor">Bisnis</Link>
                            </div>
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