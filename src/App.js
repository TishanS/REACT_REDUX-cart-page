import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";

import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
      
        <Header />
        <Routes>
        {/* <Switch> */}
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        {/* </Switch> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;