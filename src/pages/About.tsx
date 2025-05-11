import { Link } from "react-router";
import Navigation from "../Navigation";

function About() {
    return (
        <>
            <header className="pt-5 mt-5">
                <h1>O Mně</h1>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Navigation />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <main>
                            <br />
                            <p>Jmenuji se Tadeáš Máca</p>
                            <p>Podívej se taky na mé práce --{">"}<Link to="/website/portfolio">Portfolio</Link></p>
                            <p>Pokud mě chceš kontaktovat --{">"}<Link to="/website/contact">Kontakt</Link></p>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About

