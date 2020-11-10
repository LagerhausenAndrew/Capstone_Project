import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/header';
import Footer from './components/footer';
import OverallContainer from './components/overall_container';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <main>
          <OverallContainer favoriteProducts={this.state.favoriteProducts}/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
