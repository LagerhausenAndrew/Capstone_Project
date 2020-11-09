import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import Header from './components/header';
import Footer from './components/footer';
import HomepageContainer from './components/home_page_container'
import ProductPageContainer from './components/product_page_container';
import UserPageContainer from './components/user_page_container';
import BlogPageContainer from './components/blog_page_container';
import ContactPageContainer from './components/contact_page_container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
      <Route exact path="/" render={() => <HomepageContainer />} />
      <Route path="/products" render={() => <ProductPageContainer />} />
      <Route path="/blog" render={() => <BlogPageContainer />} />
      <Route path="/contact" render={() => <ContactPageContainer />} />
      <Route path="/user" render={() => <UserPageContainer />} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
