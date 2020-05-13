import React, { Component } from "react";

export class Datos extends Component {
  render() {
    return (
      <div className="datos">
        <article className="message is-dark">
          <div className="message-headeruwu">
          <p>Fecha: {this.props.fecha.substring(0,10)}</p>
          <p>Hora: {this.props.fecha.substring(11,19)}</p>
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
