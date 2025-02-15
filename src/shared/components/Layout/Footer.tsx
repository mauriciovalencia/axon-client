import "../../../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Axon Client. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
