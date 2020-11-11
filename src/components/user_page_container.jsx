import React from 'react';
import SignUpPage from './signup';
import UserPage from './user_page';

const UserPageContainer = (props) => {
    return(
        <div className='signUp'>
            {!props.currentUser ?
                <SignUpPage handleSignUp={props.handleSignUp}/>
                :
                <UserPage 
                    handleLogOut={props.handleLogOut}
                    currentUser={props.currentUser}
                />
            }
        </div>
    )
}

export default UserPageContainer;