import React from 'react';
import { Button } from 'evergreen-ui';

const UserPage = (props) => {
    return(
        <div className='profile'>
            <div>
                <h1>Welcome {props.currentUser.name}</h1>
            </div>
            <div className='shoppingCart'>
                <h3>Shopping Cart</h3>
                <h5>Total Price: </h5>
            </div>
            <div>
                <Button className='button' onClick={(e) => props.handleLogOut(e)}>Log Out</Button>
            </div>
        </div>
    )
}

export default UserPage;