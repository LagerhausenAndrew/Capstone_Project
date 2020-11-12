import React from 'react';
import { Button } from 'evergreen-ui';

const UserPage = (props) => {
    return(
        <div>
            <div>
                <h1>Welcome {props.currentUser.name}</h1>
            </div>
            <div>
                <h3>Shopping Cart</h3>
            </div>
            <div>
                <Button className='button' onClick={(e) => props.handleLogOut(e)}>Log Out</Button>
            </div>
        </div>
    )
}

export default UserPage;