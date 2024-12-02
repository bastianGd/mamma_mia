import './notFound.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
    <>
        <div className='container mt-5 error404'>
            <div className='d-flex d-flex justify-content-center p-2'>
                <h1>
                    OOPS... PÁGINA NO ENCONTRADA 🫠
                </h1>
            </div>
            <div className='d-flex d-flex justify-content-center p-2'>
                <h2>
                    Error 404 😥
                </h2>
            </div>
            <div className='d-flex d-flex justify-content-center p-2'>
                <h5>
                    Lamentamos las molestias, pero la página que buscas, no se encuentra 😕
                </h5>
            </div>

            <Link className='d-flex p-2 btn btn-warning m-5 justify-content-center'
                to="/">
                Volver al inicio
            </Link>

        </div>
    </>

    )
}

export default NotFound