import React from 'react';

const UserPage = (props) => {
    return(
        <div>
            <h1>Welcome {props.currentUser.name}</h1>
            <button onClick={(e) => props.handleLogOut(e)}>Log Out</button>
        </div>
    )
}

export default UserPage;