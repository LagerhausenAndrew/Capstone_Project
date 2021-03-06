import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Avatar } from 'evergreen-ui'

//  This is the header page. Where the links are in the tabs.

const Header = (props) => {
    return(
        <div className='titleBlock'>
            <header className='mainHeader'>
                Lager's Lumber Creations
            </header>
            <div className='navBar'>
                <ul className='list'>
                    <div><li><Link className='link' to='/'><Button height={56} appearance="primary">Home</Button></Link></li></div>
                    <div><li><Link className='link' to='/products'><Button height={56} appearance="primary">Products</Button></Link></li></div>
                    <div><li><Link className='link' to='/blog'><Button height={56} appearance="primary">Blog</Button></Link></li></div>
                    <div><li><Link className='link' to='/contact'><Button height={56} appearance="primary">Contact</Button></Link></li></div>
                    {!props.currentUser ?
                        <div><li><Link className='link' to='/user'><Button height={56} appearance="primary">Sign Up/LogIn</Button></Link></li></div>
                        :
                        <div><li><Link className='avatar' to='/user'><Avatar name={props.currentUser.name} size={40} appearance="primary">{props.currentUser.name}</Avatar></Link></li></div>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;