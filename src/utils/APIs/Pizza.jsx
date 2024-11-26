import { useEffect, useState } from "react";
import CustomCard from "../../components/Cards/CustomCard";

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
        <div className="d-flex flex-wrap justify-content-center m-3">
            <CustomCard
                key={pizzas.id}
                name={pizzas.name}
                desc={pizzas.desc}
                img={pizzas.img}
                ingredients={pizzas.ingredients}
                price={pizzas.price} />

        </div>
    );
};

export default Pizza;
