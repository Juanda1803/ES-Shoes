import React from "react";

import "../assets/styles/components/ShoesForm.css";

class ShoesForm extends React.Component {
  render() {
    return (
      <div className="shoesForm">
        <form>
          <div className="form-container">
            <label>Nombre</label>
            <input
              name="firstName"
              onChange={this.handleChange}
              placeholder="Nombre"
            />
          </div>

          <div className="form-container">
            <label>Apellido</label>
            <input placeholder="Apellido" />
          </div>

          <div className="form-container">
            <label>Tipo de Arreglo</label>
            <input placeholder="Tipo de Arreglo" />
          </div>
          <div className="form-container">
            <label>Valor</label>
            <input placeholder="Valor" />
          </div>

          <div className="form-container">
            <label>Abono</label>
            <input placeholder="Abono" />
          </div>
          <div className="form-container">
            <label>Celular</label>
            <input placeholder="Celular" />
          </div>

          <div className="form-container">
            <label>Descripcion</label>
            <textarea
              className="form-description"
              placeholder="Descripcion"
              rows="10"
              cols="40"
            />
          </div>

          <div className="form-container__date">
            <div className="form-day">
              <label>Dia</label>
              <input className="form-date" placeholder="Dia" />
            </div>

            <div className="form-day">
              <label>Mes</label>
              <input className="form-date" placeholder="Mes" />
            </div>
          </div>

          <button className="btn btn-primary save">Guardar</button>
        </form>
      </div>
    );
  }
}

export default ShoesForm;
