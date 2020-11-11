import React from 'react';
import SignUpPage from './signup';

const UserPageContainer = (props) => {
    return(
        <div>
            <SignUpPage handleSignUp={props.handleSignUp}/>
        </div>
    )
}

export default UserPageContainer;