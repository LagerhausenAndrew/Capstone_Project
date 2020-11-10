import React from 'react';
import { Text, Heading } from 'evergreen-ui';

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
                    <Heading size={900} marginTop="default">'Gold Standard' Corn Hole Boards</Heading>
                    <Text size={300}>September 12th, 2020</Text><br></br>
                    <Text size={500}>This was my first custom ordered piece I created.</Text>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;