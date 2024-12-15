import { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NotFound from '@/views/NotFound/NotFound'; 

const PizzaDetails = () => {
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const URL = `http://localhost:5000/api/pizzas/${id}`;

    async function fetchPizzaDetails() {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error("Pizza not found"); 
            }
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.error("Error fetching pizza data:", error);
            setError(true); 
        }
    }

    useEffect(() => {
        fetchPizzaDetails();
    }, [id]);

    // Mostrar la página NotFound si ocurre un error
    if (error) {
        return <NotFound />;
    }

    if (!pizza) {
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
                        src={pizza.img}
                        alt={pizza.name}
                        className="rounded"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Col>
                <Col md={8}>
                    <h3 className="text-secondary">{pizza.name}</h3>
                    <p className="text-muted">{pizza.desc}</p>
                    <ListGroup variant="flush" className="mt-3">
                        <ListGroup.Item>
                            <strong>Ingredientes:</strong>
                        </ListGroup.Item>
                        {pizza.ingredients.map((ingredient, index) => (
                            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <h4 className="text-success mt-4">Precio: ${pizza.price}</h4>
                    <div className="mt-4">
                        <Button variant="primary" onClick={() => window.history.back()}>
                            Volver atrás
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PizzaDetails;
