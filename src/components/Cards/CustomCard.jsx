/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CustomButton from '../Buttons/CustomButton';
import FormatNumber from '@/utils/FormatNumber';
import './CustomCard.css';

const CustomCard = ({ id, img, name, desc, price, ingredients}) => {

    return (
        <div className="d-flex flex-wrap justify-content-center m-3">
            <Card
                key={id}
                style={{ width: '30rem' }}
                className="card-container">

                <div className="card-image-container">
                    <Card.Img
                        variant="top"
                        src={img}
                        alt={name}
                        className="card-image"
                    />
                    <div className="card-description-overlay">
                        <h5>{name}</h5>
                        <p>{desc}</p>
                    </div>
                </div>

                {/* Contenido de la tarjeta */}
                <Card.Title className="p-3 mb-0 pizza-title">{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item className="text-center" variant="flush">
                        <p className="text-muted">Ingredientes:</p>
                        <ul className="pizza-ingredients">
                            <li>
                                {ingredients.join(', ')}
                            </li>
                        </ul>
                    </ListGroup.Item>

                    <ListGroup.Item className="p-4">
                        <Card.Title className="text-center pb-3">
                            Precio ${FormatNumber(price)}
                        </Card.Title>
                        <div className="d-flex justify-content-evenly">
                            <CustomButton color="outline-dark light" label="Ver más 👀" />
                            <CustomButton
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
