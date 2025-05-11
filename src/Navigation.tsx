import { Link } from "react-router";

function Navigation() {
    return (
    <nav className="">
        <ul>
            <li /* className="text-decoration-none" */ ><Link to="/">Hlavní stránka</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/about">O Mně</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/education">Vzdělání</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/certs">Certifikáty</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/experience">Zkušenosti</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/portfolio">Portfolio</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/contact">Kontakt</Link></li>
        </ul>
    </nav>
    )
}

export default Navigation
