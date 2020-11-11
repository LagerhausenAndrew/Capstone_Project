import React from 'react';
import { Button } from 'evergreen-ui';

const UserPage = (props) => {
    return(
        <div>
            <h1>Welcome {props.currentUser.name}</h1>
            <Button className='button' onClick={(e) => props.handleLogOut(e)}>Log Out</Button>
        </div>
    )
}

export default UserPage;