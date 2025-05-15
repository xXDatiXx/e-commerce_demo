import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:8080/api/products')
    .then(response => {
      console.log(response.data);
      setProducts(response.data);
    })
    .catch(error => console.error(error));
}, []);

  return (
    <div>
      <nav className="navbar">
        <h1>Tienda de Estambres</h1>
      </nav>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button className="btn">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default App;
