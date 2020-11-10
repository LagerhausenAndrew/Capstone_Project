import React from 'react';

const BlogPage = (props) => {
    return(
        <div>
            <div className='favoriteProjects'>
                <div className='favProjectImage'>
                    <img className='favProjectImage' src={props.favoriteProducts.imageSRC} />
                </div>
                <div className='info'>
                    <h1 className='favCustHead'>{props.favoriteProducts.name}</h1>
                    <p>{props.favoriteProducts.date}</p>
                    <p className='favCustText'>{props.favoriteProducts.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;