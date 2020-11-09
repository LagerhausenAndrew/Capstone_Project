import React from 'react';
import { Route } from 'react-router-dom';

// Components
import HomepageContainer from './home_page_container'
import ProductPageContainer from './product_page_container';
import UserPageContainer from './user_page_container';
import BlogPageContainer from './blog_page_container';
import ContactPageContainer from './contact_page_container';

const OverallContainer = (props) => {
  return (
    <div className='contentBlock'>
        <Route exact path="/" render={() => <HomepageContainer />} />
        <Route path="/products" render={() => <ProductPageContainer />} />
        <Route path="/blog" render={() => <BlogPageContainer />} />
        <Route path="/contact" render={() => <ContactPageContainer />} />
        <Route path="/user" render={() => <UserPageContainer />} />
    </div>
  );
}

export default OverallContainer;