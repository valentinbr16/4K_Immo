import React, {useState} from 'react';
import './App.css';
import Card from './Card';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Card type="STUDIO" surface="33m²" city="Saint-Omer" />
    </div>
  );
}

export default App;
