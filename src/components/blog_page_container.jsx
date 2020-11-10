import React from 'react';
import BlogPage from './blog_page';

const BlogPageContainer = (props) => {

    return(
        <div>
            <div className='blogTitle'>
                <h1>Favorite Projects</h1>
            </div>
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