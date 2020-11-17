import React from 'react';
import BlogPage from './blog_page';

//  This is the container for the Blog Page
const BlogPageContainer = (props) => {

    return(
        <div>
            {props.favoriteProducts.map((favoriteProducts, id) => {
                return(
                    <BlogPage 
                        favoriteProducts={favoriteProducts}
                        key={id}
                    />
                )
            })}
        </div>
    )
}

export default BlogPageContainer;