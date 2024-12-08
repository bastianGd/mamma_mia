import { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Pizza = () => {
    const [pizzas, setPizzas] = useState([]);
    const URL = "http://localhost:5000/api/pizzas/p001";

    const fetchPizzas = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.error("Error fetching pizza data:", error);
        }
    };

    useEffect(() => {
        fetchPizzas();
    }, []);

    if (pizzas.length === 0) {
        return <div>Cargando información, por favor, espere...</div>;
    }

    return (
        <Container className="my-4 p-4 bg-light rounded shadow">
            <Row className="text-center">
                <Col>
                    <h2 className="text-primary">Detalles de la Pizza</h2>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4} className="text-center">
                    <Card.Img
                        variant="top"
                        src={pizzas.img}
                        alt={pizzas.name}
                        className="rounded"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Col>
                <Col md={8}>
                    <h3 className="text-secondary">{pizzas.name}</h3>
                    <p className="text-muted">{pizzas.desc}</p>
                    <ListGroup variant="flush" className="mt-3">
                        <ListGroup.Item>
                            <strong>Ingredientes:</strong>
                        </ListGroup.Item>
                        {pizzas.ingredients.map((ingredient, index) => (
                            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <h4 className="text-success mt-4">Precio: ${pizzas.price}</h4>
                </Col>
            </Row>
        </Container>

    );
};

export default Pizza;
