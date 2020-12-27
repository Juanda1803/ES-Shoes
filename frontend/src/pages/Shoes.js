import React from 'react';

import ShoesList from '../components/ShoesList';
import logo from '../assets/static/es-shoes.png';
import '../assets/styles/pages/Shoes.css';
import { Link } from 'react-router-dom';
import PageLoding from '../components/PageLoding';
import PageError from '../components/PageError';

const CLIENT_API = 'http://localhost:3000/api/client';

class Shoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      // const response = await fetch(CLIENT_API);
      // const data = await response.json();
      const data = [];
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.state({
        loading: false,
        error: error,
      });
    }

    // fetch(API)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ loading: false, data: data });
    //     console.log(data);
    //   })
    //   .catch((error) => this.setState({ loading: false, error: error }));
  };
  componentDidUpdate(prevProps, prevState) {
    console.log({
      prevProps,
      prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }
  componentWillUnmount() {
    // console.log("6. componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }
  render() {
    // Loading Handler
    if (this.state.loading === true) {
      return <PageLoding />;
    }

    // Error Handler
    if (this.state.error) {
      return <PageError />;
    }

    return (
      <>
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
              {/* <ShoesList shoes={this.state.data} /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Shoes;
