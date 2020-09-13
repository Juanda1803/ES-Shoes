import React from "react";

import Shoes from "../components/Shoes";
import ShoesForm from "../components/ShoesForm";
import Gravatar from "../components/Gravatar";
import Navbar from "../components/Navbar";
import "../assets/styles/pages/ShoesNew.css";

class ShoesNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <Shoes
                name="Juan David"
                typeOfArrangement="Remonta"
                value="27.000"
                payment="20.000"
                phone="3023455882"
                description="Estan sucion les falta un cordon y se encuantran en mal estado"
                day="14"
                month="septiembre"
              />
            </div>
          </div>
        </div>
        <Gravatar />
        <ShoesForm />
      </div>
    );
  }
}

export default ShoesNew;
