import { Link } from "react-router";
import "../../../styles/Navbar.css";
import logo from "../../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><img src={logo} alt="Logo" className="logo"/></div>
            <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
                <li><Link to="/users">Usuarios</Link></li>
                <li><Link to="/create-user">Crear Usuario</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
