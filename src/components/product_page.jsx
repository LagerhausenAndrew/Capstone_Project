import React from 'react';
import { ShoppingCartIcon, HeartIcon, InfoSignIcon, IconButton } from 'evergreen-ui'

const ProductPage = (props) => {
    return(
        <div>
            <div className="productCard">  
                <img className='products' src={props.products.img} />              
                <div className='productInfo'>
                    <p>Name: {props.products.name}</p>
                    <p>Price: ${props.products.price}</p>
                    <p>Description: {props.products.description}</p>
                    {props.products.qty > 0 ?
                        <p>Quantity Remaining: {props.products.qty}</p>
                        :
                        <p className='outOfStock'>Sorry we are out of stock</p>
                    }
                    <div className='productButton'>
                        <IconButton icon={HeartIcon} onClick={props.vote} height={40}/>
                        <IconButton icon={InfoSignIcon} onClick={props.moreInfo} height={40}/>
                        {!props.currentUser ?
                            null
                        :
                        <div>
                            {props.products.qty > 0 ?
                            <IconButton icon={ShoppingCartIcon} onClick={() => props.addToCart((props.products.id)-1)} height={40}/>
                            :
                            null
                            }
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;