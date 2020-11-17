import React from 'react';
import ProductPage from './product_page';

//  This is the product page container where I map over my data from my backend.

const ProductPageContainer = (props) => {
    return(
        <div>
            <h1>Product Page</h1>
            <div className='productPage'>
                {props.products && props.products.map((products, id) => {
                    return (
                        <ProductPage 
                            products={products}
                            key={id}
                            currentUser={props.currentUser}
                            addToCart={props.addToCart}
                            vote={props.vote}
                            moreInfo={props.moreInfo}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPageContainer;