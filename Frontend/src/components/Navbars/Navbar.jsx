import { Nav, Navbar } from "react-bootstrap";
import formatNumber from "@/utils/FormatNumber";
import pizzaLogo from "@/assets/imgs/Navbar/logo-pizzeria.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { getActiveClass } from "@/utils/getActiveClass";

const NavbarPizza = () => {
    const token = 1; 
    const { totalPrice } = useContext(CartContext); 

    return (
        <Navbar bg="dark" expand="lg" className="navbar navbar-expand navbar-light bg-dark" data-bs-theme="dark">

            {/* Logo de la pizzería */}
            <Navbar.Brand as={Link} to="/" className="mx-5">
                <img
                    src={pizzaLogo}
                    alt="logo pizzería mamma mia"
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>

            {/* Navegación principal */}
            <Nav className="me-auto">
                <NavLink
                    to="/"
                    className={({ isActive }) => getActiveClass(isActive)}
                >
                    🍕 Home
                </NavLink>
                {token ? (
                    <>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => getActiveClass(isActive)}
                        >
                            👤 Profile
                        </NavLink>
                        <NavLink to="/a" className={({ isActive }) => getActiveClass(isActive)}>
                            🔐 Logout
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className={({ isActive }) => getActiveClass(isActive)}>
                            🔑 Login
                        </NavLink>
                        <NavLink to="/register" className={({ isActive }) => getActiveClass(isActive)}>
                            🔐 Register
                        </NavLink>

                    </>
                )}
            </Nav>

            {/* Total del carrito (solo si está logueado) */}
            {token && (
                <NavLink
                    to="/cart"
                    className="border border-primary text-info px-3 me-5 nav-link"
                >
                    🛒 Total: $ {formatNumber(totalPrice)}
                </NavLink>
            )}
        </Navbar>
    );
};

export default NavbarPizza;
