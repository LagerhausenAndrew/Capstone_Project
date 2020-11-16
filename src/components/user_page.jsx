import React from 'react';
import { IconButton, RemoveIcon, Button } from 'evergreen-ui';

const UserPage = (props) => {
    return(
        <div className='profile'>
            <div>
                <h1>Welcome {props.currentUser.name}</h1>
            </div>
            <div className='shoppingCartContainer'>
                <h3>Shopping Cart</h3>
                <div className='shoppingCart'>
                    <h5>Total Price: </h5>
                    <IconButton icon={RemoveIcon} appearance="primary" intent="danger"height={40}/>
                </div>
            </div>
            <div>
                <Button className='button' appearance="primary" intent="danger" onClick={(e) => props.handleLogOut(e)}>Log Out</Button>
            </div>
        </div>
    )
}

export default UserPage;