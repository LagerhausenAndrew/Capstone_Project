import React from 'react';
import { Route } from 'react-router-dom';

// Components
import HomePage from './home_page'
import ProductPageContainer from './product_page_container';
import UserPageContainer from './user_page_container';
import BlogPageContainer from './blog_page_container';
import ContactPage from './contact_page';
import Login from './login_page'

const OverallContainer = (props) => {
  return (
    <div className='contentBlock'>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/products" render={() => 
          <ProductPageContainer 
            currentUser={props.currentUser}
            products={props.products}
            addToCart={props.addToCart}
            vote={props.vote}
            moreInfo={props.moreInfo}
          />
        } />
        <Route path="/blog" render={() => 
          <BlogPageContainer 
            favoriteProducts={props.favoriteProducts} 
          />
        } />
        <Route path="/contact" render={() => <ContactPage />} />
        <Route path="/user" render={() => 
          <UserPageContainer 
            handleLogOut={props.handleLogOut} 
            handleSignUp={props.handleSignUp} 
            currentUser={props.currentUser}
          />
        } />
        <Route path="/login" render={() => <Login handleLogin={props.handleLogin}/>} />
    </div>
  );
}

export default OverallContainer;