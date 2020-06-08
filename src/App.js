import React from 'react';
import './App.css';
import Header from "./components/Header"
import {Switch, Route} from "react-router-dom"
import Photos from "./components/Photos"
import Cart from "./components/Cart"
import Footer from "./components/Footer"

function App() {

  console.log("App")

  return (
    <div className="App">
      <Header />

        <Switch>
          <Route exact path ="/"><Photos /></Route>
          <Route path = "/cart"><Cart /></Route>
        </Switch>

      <Footer />


    </div>
  );
}

export default App;
