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
        description: "This was my first custom ordered piece I created."
        },
        {
          name: "Outdoor Colorful Bench",
          imageSRC: "/blog_bench.jpg",
          date: "October 16th, 2020",
          description: "This was a fun bench to create. Staining not so much, but turned out kind of neat.."
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
