import './App.css';
import React, { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import MiNavbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination';

function App() {
  const [itemListContainers, setItemListContainers] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  const fetchItemListContainers = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setItemListContainers(data.results))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchItemListContainers(url);
  }, []);

  return (
    <div className="text-center"> 
      <MiNavbar />
      <h1 className="text-muted mt-5">Bienvenidos a Candelitte Clothing</h1> 
      <p className="text-secondary">No puede dejar de aprovechar las ofertas imperdibles.</p> 
      <div className='container mt-5'>
        <ItemListContainer itemList={itemListContainers}></ItemListContainer>
        <Pagination></Pagination>
      </div>
    </div>
  );
}

export default App;
