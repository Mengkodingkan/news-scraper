import { Link } from "react-router-dom";

const dropdown2Active = () => {
    const dropdown_2 = document.querySelector('.dropdown-2');
    dropdown_2.classList.toggle('active');
}

const Sidebar = () => {
    return(
        <>
            <div className="sidebar-contents">
                <div className="container">
                    <Link to="/" className="anchor">Home</Link>
                    <div className="dropdown-2" onClick={dropdown2Active}>
                        <div className="top">
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
        </>
    )
}

export default Sidebar