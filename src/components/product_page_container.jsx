import React from 'react';
import ProductPage from './product_page';

const ProductPageContainer = (props) => {
    return(
        <div>
            <ProductPage 
                currentUser={props.currentUser}
                addToCart={props.addToCart}
                vote={props.vote}
                moreInfo={props.moreInfo}
            />
        </div>
    )
}

export default ProductPageContainer;