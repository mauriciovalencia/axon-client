import { Link } from "react-router";
import "../../../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Axon Client</div>
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/users">Usuarios</Link></li>
                <li><Link to="/create-user">Crear Usuario</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
