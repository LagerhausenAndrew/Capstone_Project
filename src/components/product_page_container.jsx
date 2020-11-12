import React from 'react';
import ProductPage from './product_page';

const ProductPageContainer = (props) => {
    return(
        <div>
            <ProductPage 
                currentUser={props.currentUser}
            />
        </div>
    )
}

export default ProductPageContainer;