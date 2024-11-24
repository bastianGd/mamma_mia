import { useEffect, useState } from "react";
import CustomCard from "../../components/Cards/CustomCard";

const Pizza = () => {
    const [pizzas, setPizzas] = useState([]); 
    const URL = "http://localhost:5000/api/pizzas";

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
            {pizzas.map((pizza) => (
                <CustomCard key={pizza.id} pizza={pizza} /> 
            ))}
        </div>
    );
};

export default Pizza;
