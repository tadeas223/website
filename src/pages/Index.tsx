import { Link } from "react-router"
import Navigation from "../Navigation"

function Index() {
    return (
        <>
            <header className="pt-5 mt-5">
                <h1>Tadeáš Máca</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Navigation />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <main>
                            <br />
                        </main>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Index
