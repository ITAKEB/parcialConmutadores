import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Datos } from "./componentes/datos.js";

class App extends Component {
  state = {
    feeds: [],
  };

  _consultar = () => {
    fetch("https://thingspeak.com/channels/1049814/feed.json")
      .then((res) => res.json())
      .then((results) => {
        //console.log(results)
        //const { feeds } = results;

        this.setState({ feeds: results.feeds });
      });
  };


  componentWillMount() {
    this._consultar();
  }

  _hacerDatos = () =>{
    const {feeds} = this.state
    return(
      feeds.map(dato =>
        <div key={dato.entry_id}>
         <Datos 
         id={dato.entry_id}
         fecha={dato.created_at}
         tiempo={dato.field2}
         distancia={dato.field1}>
         </Datos>
         </div>
         )
    )
  }


  render() {

    return (
      <div className="App">
        <div className="contenedor">
          {console.log(this.state.feeds)}
          {this._hacerDatos()}
        
        </div>
      </div>
    );
  }
}

export default App;