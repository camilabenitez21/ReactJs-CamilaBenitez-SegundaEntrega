import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function ItemListContainer({ itemList }) {
  const [itemListContainers, setItemListContainers] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  const fetchItemListContainers = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItemListContainers(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchItemListContainers(url);
  }, []);

  return (
    <div>
<h1 style={{ textAlign: "center", fontStyle: "italic", color: "rgb(255, 192, 203)", textShadow: "1px 1px 1px black" }}>
        BIENVENIDOS A NUESTRA TIENDA ONLINE
      </h1>
      <h2 style={{ textAlign: "center", fontStyle: "italic", color: "rgb(255, 192, 203)", textShadow: "1px 1px 1px black" }}>
        Tenemos todo lo que estas buscando.
      </h2>
      <div className="row">
        {itemListContainers.map((item, index) => (
          <div key={index} className="col mb-4">
            <Card style={{ minWidth: "200px" }}>
              <Card.Img src={item.image} alt="" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <hr />
                <p>Location: {item.location.name}</p>
                <p>Species: {item.species}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
