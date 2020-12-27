import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import '../assets/styles/components/Shoe.css';
import Gravatar from './Gravatar';

class Shoe extends React.Component {
  render() {
    return (
      <div className="shoes">
        <Header />
        <div className="shoes__container">
          <div className="shoes-reference">
            <Gravatar name={this.props.name} />
            <h1 className="shoes__container--id">001</h1>
          </div>

          <h1>
            {this.props.name} <br />
            {this.props.typeOfArrangement}
          </h1>
        </div>
        <div className="shoes__container--info">
          <h2>Phoneeeee{this.props.phone}</h2>
          <h2>{this.props.value}</h2>
          <h2>juan{this.props.payment}</h2>
          <h2 className="shoes-info__description">{this.props.description}</h2>
        </div>
        <div className="shoes__container--date">
          <h2>{this.props.date}</h2>
        </div>
      </div>
    );
  }
}

Shoe.propTypes = {
  name: PropTypes.string,
  typeOfArrangement: PropTypes.string,
  phone: PropTypes.number,
  value: PropTypes.string,
  payment: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default Shoe;
