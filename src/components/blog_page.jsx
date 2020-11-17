import React from 'react';
import { HeartIcon, IconButton } from 'evergreen-ui'

//  This is the actual Blog page and where the mapped features get dropped.

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
                    <IconButton icon={HeartIcon} onClick={props.vote} height={40}/>
                </div>
                
            </div>
        </div>
    )
}

export default BlogPage;