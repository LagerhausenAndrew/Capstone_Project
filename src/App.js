import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';

// Components
import Header from './components/header';
import Footer from './components/footer';
import OverallContainer from './components/overall_container';

import { registerUser, loginUser, verifyUser, allProducts} from './services/api_helper'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      favoriteProducts: [
        {
          name: "'Gold Standard' Corn Hole Boards",
          imageSRC: "/blog_corn_hole.jpeg",
          date: "September 12th, 2020",
          description: "This was my first custom ordered piece I created. It is a custom corn hole set made from quality fine wood for the base, and a 3/4 inch red oak plywood top. Stained with a grey weather stain and dark walnut stain. Then put a thick coat of polyurethane on for a weather protector. Painted on a requested name on the bottom of 'Gold Standard'. This was a custom piece for a dad's 50th birthday."
        },
        {
          name: "Outdoor Colorful Bench",
          imageSRC: "/blog_bench.jpg",
          date: "October 16th, 2020",
          description: "This was a fun bench to create. Staining not so much, but turned out kind of neat. It was created for a friend, who also is the owner of a small business. She wanted a colorful bench to put in her rock garden at her house. The frame is made from quality pine wood, with individual stained pine boards on the top. This piece then had a thick layer of polyurethane to ensure color and quaility protection while sitting in nature."
          },
          {
            name: "Illinois Outline",
            imageSRC: "/blog_illinois.jpg",
            date: "October 30th, 2020",
            description: "Hail to the Orange, Hail to the Blue. Hail Alma Mater, Ever so true! We love no other, So let our motto be, Victory! Illinois Varsity! This was just a project I worked on in honor to my Alma Mater Illinois."
            }
      ],
      products: null,
      cart: [],
      cartTotal: 0
    }
  }

  handleSignUp = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    this.props.history.push('/user')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }

  handleLogOut = async (e, currentUser) => {
    localStorage.removeItem('authToken');
    currentUser=this.state.currentUser;
    this.setState({ currentUser: null })
  }

  componentDidMount = async() => {
    this.allProducts();
    this.handleVerify();
  }

  allProducts = async() => {
    const products = await allProducts();
    this.setState({
      products: products.data
    })
  }

  addToCart = (id) => {
    const products = this.state.products
    const cart = this.state.cart;
    products[id].qty--
    cart.push(products[id]);
    this.setState({
      products,
      cart
    })
  }

  checkout = () => {
    const items = this.state.cart;
    const cartTotal = items.reduce((acc, curr) => {
      return acc + parseInt(curr.price)
    }, 0)
    this.setState({
      cartTotal
    })
  }

  removeFromCart = () => {
    alert('Are you sure you want to remove this item?')
  }

  vote = () => {
    alert('You voted for this product')
  }

  moreInfo = () => {
    alert('You want more info')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header
            currentUser={this.state.currentUser} 
          />
        </header>
        <main>
          <OverallContainer 
            favoriteProducts={this.state.favoriteProducts}
            currentUser={this.state.currentUser} 
            handleSignUp={this.handleSignUp}
            handleLogOut={this.handleLogOut}
            handleLogin={this.handleLogin}
            addToCart={this.addToCart}
            vote={this.vote}
            moreInfo={this.moreInfo}
            products={this.state.products}
            cart={this.state.cart}
            checkout={this.checkout} 
            numCartItems={this.state.cart.length}
            cartTotal={this.state.cartTotal}
            removeFromCart={this.removeFromCart}
          />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
