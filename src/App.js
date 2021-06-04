import React, {useState} from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';
import Intro from './Intro';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <div className="card--flex">
        <Card type="STUDIO" surface="33m²" city="Saint-Omer" />
        <Card type="T3" surface="80m²" city="Lens" />
        <Card type="T3" surface="20m²" city="Loos" />
      </div>
      <div className="card--flex">
        <Card type="T3" surface="20m²" city="Loos" />
        <Card type="T3" surface="20m²" city="Loos" />
        <Card type="T3" surface="20m²" city="Loos" />
      </div>
      <Form />


      
    </div>
  );
}

export default App;
