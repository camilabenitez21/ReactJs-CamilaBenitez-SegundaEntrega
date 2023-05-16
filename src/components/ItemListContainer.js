import React from "react";
import { Card } from "react-bootstrap";

function ItemListContainer({ itemList }) {
  return (
    <div className="row">
      {itemList.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="Card" style={{minWidth: "200px"}}>
            <img src={item.image} alt="" />
            <div className="card-boby">
              <h5 className="card-title">{item.name}</h5>
              <hr/>
              <p>Location: {item.location.name}</p>
              <p>Species: {item.species}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;

