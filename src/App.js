import React, { useState, useEffect } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faStar,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

import "./css/reset.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  library.add(faEnvelope, faKey, faStar, faPlusCircle, faMinusCircle);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState({
    items: [],
    deliveryCost: 2.5,
    totalPrice: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://super-deliveroo-back.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <>
          <Header data={data}></Header>
          <Main
            cart={cart}
            setCart={setCart}
            categories={data.categories}
          ></Main>
        </>
      )}
    </div>
  );
}

export default App;
