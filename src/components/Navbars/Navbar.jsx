import { Nav, Navbar } from "react-bootstrap";
import formatNumber from "@/utils/FormatNumber";
import pizzaLogo from "@/assets/imgs/Navbar/logo-pizzeria.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const NavbarPizza = () => {
    const token = true;
    const { totalPrice } = useContext(CartContext); 

    return (
        <Navbar bg="dark" expand="lg" className="px-5" data-bs-theme="dark">
            {/* Logo de la pizzería */}
            <Navbar.Brand as={Link} to="/" className="mx-3">
                <img
                    src={pizzaLogo}
                    alt="logo pizzería mamma mia"
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>

            {/* Navegación principal */}
            <Nav variant="tabs" defaultActiveKey="/" className="me-auto">
                <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
                {token ? (
                    <>
                        <Nav.Link as={Link} to="/profile">👤 Profile</Nav.Link>
                        <Nav.Link as={Link} to="/logout">🔒 Logout</Nav.Link>
                    </>
                ) : (
                    <>
                        <Nav.Link as={Link} to="/login">🔑 Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
                    </>
                )}
            </Nav>

            {/* Total del carrito (solo si está logueado) */}
            {token && (
                <Nav.Link as={Link} to='/cart' className="border border-primary text-info px-3">
                    🛒 Total: $ {formatNumber(totalPrice)}
                </Nav.Link>
            )}
        </Navbar>
    );
};

export default NavbarPizza;
