import React from 'react';
import './App.css';

// Components
import Header from './components/header';
import Footer from './components/footer';
import OverallContainer from './components/overall_container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <OverallContainer />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
