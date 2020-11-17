import React from 'react';
import { IconButton, RemoveIcon, Button } from 'evergreen-ui';

//  This is the User's page for logged in users. It has the shopping cart mapped items.

const UserPage = (props) => {
    return(
        <div className='profile'>
            <div className='cartItems'>
    <p>{props.cart.name} --- ${props.cart.price}</p>
                <IconButton icon={RemoveIcon} className='removeIcon' appearance="primary" onClick={props.removeFromCart} intent="danger"height={40}/>
            </div>
        </div>
    )
}

export default UserPage;