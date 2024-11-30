import { Nav, Navbar } from "react-bootstrap";
import formatNumber from "../../utils/FormatNumber"
import pizzaLogo from "@/assets/imgs/Navbar/logo-pizzeria.png";

const NavbarPizza = () => {
    const token = 1;
    const total = 5980;

    return (
        <Navbar bg="dark" className="px-5" data-bs-theme="dark">
            <Navbar.Brand className="mx-3">
                <img
                    src={pizzaLogo}
                    alt="logo pizzería mamma mia"
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Nav variant="tabs" defaultActiveKey="#" className="me-auto">
                <Nav.Link href="#">🍕 Home</Nav.Link>
                {token ? (
                    <>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">👤 Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">🔒 Logout</Nav.Link>
                        </Nav.Item>
                    </>
                ) : (
                    <>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">🔑 Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">🔐 Register</Nav.Link>
                        </Nav.Item>
                    </>
                )}
            </Nav>
            {token && (
                <Navbar.Brand className="border border-primary text-info px-3">
                    🛒 Total: $ {formatNumber(total)}
                </Navbar.Brand>
            )}
        </Navbar>
    );
};

export default NavbarPizza;
