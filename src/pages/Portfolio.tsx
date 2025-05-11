import Navigation from "../Navigation";

function Portfolio() {
    return (
        <>
            <header className="pt-5 mt-5">
                <h1>Portfolio</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Navigation />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <main>
                            <br />
                            <h2>Školní projekty</h2>
                            <br />
                            <h3>Periodic Table</h3>
                            <a href="https://github.com/tadeas223/periodic_table">https://github.com/tadeas223/periodic_table</a>
                            <h3>chat_java</h3>
                            <a href="https://github.com/tadeas223/chat_java">https://github.com/tadeas223/chat_java</a>
                            <h3>PSS_Project</h3>
                            <a href="https://github.com/tadeas223/PSS_Project">https://github.com/tadeas223/PSS_Project</a>
                            
                            <h2>Domácí projekty</h2>
                            <h3>c_base</h3>
                            <a href="https://github.com/tadeas223/c_base">https://github.com/tadeas223/c_base</a>
                            <h3>Java Game Engine</h3>
                            <a href="https://github.com/tadeas223/GameEngine">https://github.com/tadeas223/GameEngine</a>
                            
                        </main>
                    </div>
                </div>
            </div>
        </> 
    )
}
export default Portfolio
