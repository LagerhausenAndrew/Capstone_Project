import React from 'react';
import { ShoppingCartIcon } from 'evergreen-ui'

const ProductPage = (props) => {
    return(
        <div>
            <h1>Product Page</h1>
            <div>
            {!props.currentUser ?
                <h1>You're not logged in</h1>
                :
                <div>
                    <h1>You're logged in</h1>
                    <ShoppingCartIcon size={40}/>
                </div>
            }
            </div>
        </div>
    )
}

export default ProductPage;