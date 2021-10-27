import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Datos } from "./componentes/datos.js";
import  { Bar } from 'react-chartjs-2'

class App extends Component {
  state = {
    feeds: [],
    labels: [],
    datasets: [],
  };

  _consultar = () => {
    fetch("https://api.thingspeak.com/channels/1549689/feeds.json?api_key=PX3JS7WOO9KTUDQG&results=100")
      .then((res) => res.json())
      .then((results) => {
        console.log(results)
        const { feeds } = results;
        let labels = []
        let datasets = []
        feeds.map((dato) => {
          labels.push(dato.created_at)
          datasets.push(dato.field1)
        })

        this.setState({ feeds: results.feeds, labels, datasets });
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
          <Bar 
            data={{
                labels: this.state.labels,
                datasets: [{
                  label: 'Distancia (cm)',
                  data: this.state.datasets,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio:false
            }}
          />
        </div>
        <div className="contenedor">
        {console.log(this.state.feeds)}
          {this._hacerDatos()}
          </div>
      </div>
    );
  }
}

export default App;