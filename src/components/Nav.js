// import logo from "../images/logo.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src="https://picsum.phots/90/90" className="App-logo" alt="logo" />
            <ul className="navbar-nav">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Menu</li>
                <li className="nav-item">Reservations</li>
                <li className="nav-item">Order online</li>
                <li className="nav-item">Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;