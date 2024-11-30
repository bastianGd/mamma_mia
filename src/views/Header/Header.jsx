import "./header.css"

const Header = () => {
    return (
        <>
            <div className="hero-seccion d-flex justify-content-center align-items-center flex-column mb-5">
                <h1 className="hero-title" id="title">
                    ¡Pizzería Mamma Mia!
                </h1>
                <h6 className="hero-subtitle" id="subtitle">
                    ¡Tenemos las mejores pizzas que podrás encontrar!
                </h6>
                <hr className="w-50" />
            </div>
        </>
    )
}

export default Header