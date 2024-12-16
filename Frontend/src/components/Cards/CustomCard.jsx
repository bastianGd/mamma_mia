import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CustomButton from '@/components/Buttons/CustomButton';
import FormatNumber from '@/utils/FormatNumber';
import './CustomCard.css';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const CustomCard = ({ id, img, name, desc, price, ingredients }) => {

    function handleViewMore() {
        navigate(`/pizza/${id}`);
    }

    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    function handleAddToCart() {
        console.log("Agregando pizza con ID:", id);
        addToCart(id, name, price, img, ingredients);
    }


    return (
        <div className="d-flex flex-wrap justify-content-center m-3">
            <Card key={id} style={{ width: '25rem' }} className="card-container">
                <div className="card-image-container">
                    <Card.Img variant="top" src={img} alt={name} className="card-image" />
                    <div className="card-description-overlay">
                        <p>{desc}</p>
                    </div>
                </div>

                <Card.Title className="p-3 mb-0 pizza-title">{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item className="text-center" variant="flush">
                        <p className="text-muted">Ingredientes:</p>
                        <ul className="pizza-ingredients">
                            <li>{ingredients.join(', ')}</li>
                        </ul>
                    </ListGroup.Item>

                    <ListGroup.Item className="p-4">
                        <Card.Title className="text-center pb-3">
                            Precio ${FormatNumber(price)}
                        </Card.Title>
                        <div className="d-flex justify-content-evenly">
                            <CustomButton
                                onClick={handleViewMore} 
                                color="outline-dark light"
                                label="Ver más 👀"
                            />
                            <CustomButton
                                onClick={handleAddToCart}
                                color="dark"
                                label="Agregar 🛒"
                            />
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default CustomCard;
