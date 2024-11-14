import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CustomButton from '../Buttons/CustomButton'
import FormatNumber from '../../utils/FormatNumber'

const imgPizzaNapo = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
const imgPizzaEsp = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
const imgPizzaPepp = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"

const CustomCard = () => {
    return (
        <div className='d-flex m-5 justify-content-center gap-5'>
            {/* Pizza Bapolitana */}
            <Card style={{ width: '25rem' }}>

                <Card.Img
                    variant="top"
                    src={imgPizzaNapo}
                    alt='pizza española' />

                <Card.Title
                    className='p-3 mb-0'>
                    Pizza Napolitana
                </Card.Title>

                <ListGroup variant="flush">
                    <ListGroup.Item className='text-center'>
                        <p className='"text-muted"'>Ingredientes:</p>
                    </ListGroup.Item>

                    <ListGroup.Item className='p-4' >
                        <Card.Title className='text-center pb-3'>
                            Precio ${FormatNumber(6950)}
                        </Card.Title>
                        <div className='d-flex justify-content-evenly'>
                            <CustomButton color="outline-dark light" label="Ver más 👀" />
                            <CustomButton color="dark" label="Agregar 🛒" />
                        </div>
                    </ListGroup.Item>

                </ListGroup>
            </Card>

            {/* Pizza Española */}
            <Card style={{ width: '25rem' }}>

                <Card.Img
                    variant="top"
                    src={imgPizzaPepp}
                    alt='pizza española' />

                <Card.Title
                    className='p-3 mb-0'>
                    Pizza Pepperoni
                </Card.Title>

                <ListGroup variant="flush">
                    <ListGroup.Item className='text-center'>
                        <p className='"text-muted"'>Ingredientes:</p>
                    </ListGroup.Item>

                    <ListGroup.Item className='p-4' >
                        <Card.Title className='text-center pb-3'>
                            Precio ${FormatNumber(6950)}
                        </Card.Title>
                        <div className='d-flex justify-content-evenly'>
                            <CustomButton color="outline-dark light" label="Ver más 👀" />
                            <CustomButton color="dark" label="Agregar 🛒" />
                        </div>
                    </ListGroup.Item>

                </ListGroup>
            </Card>

            <Card style={{ width: '25rem' }}>

                <Card.Img
                    variant="top"
                    src={imgPizzaEsp}
                    alt='pizza española' />

                <Card.Title
                    className='p-3 mb-0'>
                    Pizza Española
                </Card.Title>

                <ListGroup variant="flush">
                    <ListGroup.Item className='text-center'>
                        <p className='"text-muted"'>Ingredientes:</p>
                    </ListGroup.Item>

                    <ListGroup.Item className='p-4' >
                        <Card.Title className='text-center pb-3'>
                            Precio ${FormatNumber(5950)}
                        </Card.Title>
                        <div className='d-flex justify-content-evenly'>
                            <CustomButton color="outline-dark light" label="Ver más 👀" />
                            <CustomButton color="dark" label="Agregar 🛒" />
                        </div>
                    </ListGroup.Item>

                </ListGroup>
            </Card>

        </div>

    )
}

export default CustomCard
