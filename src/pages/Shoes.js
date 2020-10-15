import React, { Fragment } from "react";

import ShoesList from "../components/ShoesList";
import logo from "../assets/static/es-shoes.png";
import "../assets/styles/pages/Shoes.css";
import { Link } from "react-router-dom";
import PageLoding from "../components/PageLoding";
import PageError from "../components/PageError";

const API = "http://localhost:3000/data";

class Shoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
    };

    console.log("1. contructor()");
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.setState({
      loading: true,
      error: null,
    });
    console.log("3. componentDidMount()");

    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ loading: false, data: data }))
      .catch((error) => this.setState({ loading: false, error: error }));
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }
  componentWillUnmount() {
    console.log("6. componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }
  render() {
    console.log("2/4. render()");
    if (this.state.loading === true) {
      return <PageLoding />;
    }

    if (this.state.error) {
      return <PageError />;
    }

    return (
      <Fragment>
        <div className="Shoes">
          <div className="Shoes__hero">
            <div className="Shoes__container">
              <img className="Shoes__container--image" src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Shoes-search">
          <div className="Shoes__buttons">
            <Link to="/shoes/new" className="btn btn-primary save">
              Nuevo Cliente
            </Link>
          </div>
          <div className="Shoes__list">
            <div className="Shoes-list__conatiner">
              <ShoesList shoes={this.state.data} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Shoes;
