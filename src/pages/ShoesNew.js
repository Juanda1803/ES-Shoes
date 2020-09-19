import React from "react";

import Shoes from "../components/Shoes";
import ShoesForm from "../components/ShoesForm";
import Gravatar from "../components/Gravatar";
import Navbar from "../components/Navbar";
import "../assets/styles/pages/ShoesNew.css";

class ShoesNew extends React.Component {
  state = {
    form: {
      name: "",
      typeOfArrangement: "",
      value: "",
      payment: "",
      phone: "",
      description: "",
      date: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  dateToDay() {
    const day = this.state.form.date;
    const formDate = new Date(day);
    const dayNumber = formDate.getDay();
    const dayLetter = formDate.getDate() + 1;
    const month = formDate.getMonth();
    return [dayNumber, dayLetter, month];
  }
  numberToMonth() {
    switch (this.dateToDay()[2]) {
      case 0:
        return "Enero";
      case 1:
        return "Febrero";
      case 2:
        return "Marzo";
      case 3:
        return "Abril";
      case 4:
        return "Mayo";
      case 5:
        return "Junio";
      case 6:
        return "Julio";
      case 7:
        return "Agosto";
      case 8:
        return "Septiembre";
      case 9:
        return "Octubre";
      case 10:
        return "Noviembre";
      case 11:
        return "Diciembre";
    }
  }
  numberToDay() {
    const DATE = ` ${this.dateToDay()[1]} de ${this.numberToMonth()}`;
    switch (this.dateToDay()[0]) {
      case 0:
        return `Lunes ${DATE}`;
      case 1:
        return `Martes ${DATE}`;
      case 2:
        return `Miercoles ${DATE}`;
      case 3:
        return `Jueves ${DATE}`;
      case 4:
        return `Viernes ${DATE}`;
      case 5:
        return `Sabado ${DATE}`;
      case 6:
        return `Domingo ${DATE}`;
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col col-6">
              <Shoes
                name={this.state.form.name}
                typeOfArrangement={this.state.form.typeOfArrangement}
                value={`Valor: $${this.state.form.value}`}
                payment={`Abono: $${this.state.form.payment}`}
                phone={this.state.form.phone}
                description={this.state.form.description}
                date={this.numberToDay()}
              />
            </div>
            <div className="col">
              <ShoesForm
                formValue={this.state.form}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <Gravatar />
      </div>
    );
  }
}

export default ShoesNew;
