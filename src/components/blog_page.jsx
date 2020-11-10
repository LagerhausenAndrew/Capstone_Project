import React from 'react';

const BlogPage = (props) => {
    return(
        <div>
            <div className='blogTitle'>
                <h1>Favorite Projects</h1>
            </div>
            <div className='favoriteProjects'>
                <div className='favProjectImage'>
                    <img className='favProjectImage' src='/blog_corn_hole.jpeg' />
                </div>
                <div className='info'>
                    <h1>'Gold Standard' Corn Hole Boards</h1>
                    <p>September 12th, 2020</p>
                    <p>This was my first custom ordered piece I created.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;