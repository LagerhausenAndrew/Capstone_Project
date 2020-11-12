import React from 'react';
import { ShoppingCartIcon, HeartIcon, InfoSignIcon } from 'evergreen-ui'

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
                    <div>
                        <HeartIcon size={40}/>
                        <InfoSignIcon size={40}/>
                        {!props.currentUser ?
                            <h1>You're not logged in</h1>
                        :
                            <ShoppingCartIcon size={40}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;