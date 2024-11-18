import logo from "../assets/react-logo.png"

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <img src={logo} className="nav-header image"></img>
                <h1 className="nav-header-one">ReactFacts</h1>
                <h4 className="nav-header-two ">React Course - Project 1</h4>
            </nav>
        </>
    )
}

export default Navbar