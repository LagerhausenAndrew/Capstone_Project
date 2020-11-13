import React from 'react';
import { ShoppingCartIcon, HeartIcon, InfoSignIcon, IconButton } from 'evergreen-ui'

const ProductPage = (props) => {
    return(
        <div>
            <h1>Product Page</h1>
            <div className="productCard">  
                <img className='products' src='/profile_image.jpg' />              
                <div className='productInfo'>
                    <p>Price:</p>
                    <p>Description:</p>
                    <p>Quantity:</p>
                    <div className='productButton'>
                        <IconButton icon={HeartIcon} onClick={props.vote} height={40}/>
                        <IconButton icon={InfoSignIcon} onClick={props.moreInfo} height={40}/>
                        {!props.currentUser ?
                            null
                        :
                        <IconButton icon={ShoppingCartIcon} onClick={props.addToCart} height={40}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;