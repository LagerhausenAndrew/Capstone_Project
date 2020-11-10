import React from 'react';
import { Route } from 'react-router-dom';

// Components
import HomePage from './home_page'
import ProductPageContainer from './product_page_container';
import UserPageContainer from './user_page_container';
import BlogPageContainer from './blog_page_container';
import ContactPage from './contact_page';

const OverallContainer = (props) => {
  return (
    <div className='contentBlock'>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/products" render={() => <ProductPageContainer />} />
        <Route path="/blog" render={() => <BlogPageContainer />} />
        <Route path="/contact" render={() => <ContactPage />} />
        <Route path="/user" render={() => <UserPageContainer />} />
    </div>
  );
}

export default OverallContainer;