import React from 'react';
import './App.css';

// Components
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
