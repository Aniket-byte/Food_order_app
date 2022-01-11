import './App.css';

import React from "react";
import Navbar from "./components/Layout/Navbar";
import Meals from './components/Meals/Meals';

import { CardContextProvider } from './store/cart-context';

function App() {
  return (
    <CardContextProvider>
      <Navbar />
      <Meals />
    </CardContextProvider>
  );
}

export default App;
