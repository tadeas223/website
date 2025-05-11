import Navigation from "../Navigation";

function Contact() {
    return (
        <>
            <header className="pt-5 mt-5">            
                <h1>Kontakt</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Navigation />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <main>
                            <br />
                            <h3>github</h3>
                            <a href="https://github.com/tadeas223">https://github.com/tadeas223</a>
                            <br />
                            <h3>email</h3>
                            <p>maca.tadeas@gmail.com</p>
                        </main>
                    </div>
                </div>
            </div>
        </> 
    )
}
export default Contact 
