import { Link } from 'react-router-dom';
import './style.css';


function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <div className="rmg">RMG</div>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/main-page">Main</Link>
                </li>
                <li>
                    <Link to="/suggest-meal">Suggest</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;