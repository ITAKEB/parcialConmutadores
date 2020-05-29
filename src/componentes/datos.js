import React, { Component } from "react";

export class Datos extends Component {
  render() {
    const {fecha}= this.props
    var hora = fecha.substring(11,13);
    if(hora>=0 && hora <=5){
      hora = 24+parseInt(hora);
    }
    hora= hora -5;
    hora =  hora + fecha.substring(13,19);
    //hora = hora-5;
    return (
      <div className="datos">
        <article className="message is-dark">
          <div className="message-headeruwu">
          <p>Fecha: {this.props.fecha.substring(0,10)}</p>
          <p>Hora: {hora}</p>
          </div>
          <div className="message-body">
            <p>El tiempo fue de : {this.props.tiempo} s</p>
            <p>La distancia fue de : {this.props.distancia} cm</p>
          </div>
        </article>
      </div>
    );
  }
}
