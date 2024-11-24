/* eslint-disable no-unused-vars */
import Header from "../Header/Header";
import CustomCard from "../../components/Cards/CustomCard";
import {pizzas} from "../../data/pizzas";

const Home = () => {

  return (
    <>
      <Header />
      {/* <div className="d-flex flex-wrap justify-content-center gap-5">
        {pizzas.map((pizza) => (
          <CustomCard key={pizza.id} pizza={pizza} />
        ))}
      </div> */}
    </>
  );
};

export default Home;
