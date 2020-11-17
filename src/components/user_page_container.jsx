import React from 'react';
import SignUpPage from './signup';
import UserPage from './user_page';
import { Button } from 'evergreen-ui';

//  This is the user page container

const UserPageContainer = (props) => {
    return(
        <div className='signUp'>
            {/* If a user is not signed in, this will display a signup page */}
            {!props.currentUser ?
                <SignUpPage handleSignUp={props.handleSignUp}/>
                :
                <div>
                    <h1>Welcome {props.currentUser.name}</h1>
                    <div className='shoppingCart'>
                        <h3>Shopping Cart</h3>
                        {props.cart.map((cart, id) => {
                            return (
                            <UserPage 
                                handleLogOut={props.handleLogOut}
                                currentUser={props.currentUser}
                                removeFromCart={props.removeFromCart}
                                cart={cart}
                                key={id}
                            />
                            )
                        })}
                        {/* If you don't have a shopping cart it'll tell you that you should add items to the cart. */}
                        {/* If you have shopping cart items it'll display those items and prices along with buttons */}
                        {!props.numCartItems > 0 ?
                        <p>Your shopping cart is empty! You better fix that.</p>
                        :
                        <p>Total Price: ${props.cartTotal}</p>
                        }
                        {props.numCartItems > 0 &&
                            <Button onClick={props.checkout}>Calculate Total</Button>
                        }  
                        {props.numCartItems > 0 &&      
                            <Button onClick={props.submitOrder}>Submit Order</Button>  
                        }                     
                    </div>
                        <div>
                            <Button className='button' appearance="primary" intent="danger" onClick={(e) => props.handleLogOut(e)}>Log Out</Button>
                        </div>
                </div>
            }
        </div>
    )
}

export default UserPageContainer;