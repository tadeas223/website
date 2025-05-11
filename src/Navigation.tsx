import { Link } from "react-router";

function Navigation() {
    return (
    <nav className="">
        <ul>
            <li /* className="text-decoration-none" */ ><Link to="/website/">Hlavní stránka</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/website/about">O Mně</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/website/education">Vzdělání</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/website/certs">Certifikáty</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/website/experience">Zkušenosti</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/website/portfolio">Portfolio</Link></li>
            <li /* className="text-decoration-none" */ ><Link to="/website/contact">Kontakt</Link></li>
        </ul>
    </nav>
    )
}

export default Navigation
