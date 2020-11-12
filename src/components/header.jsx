import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'evergreen-ui'

const Header = (props) => {
    return(
        <div className='titleBlock'>
            <header className='mainHeader'>
                Lager's Lumber Creations
            </header>
            <nav className='navBar'>
                <ul>
                    <li><Link className='link' to='/'><Button height={56} appearance="primary">Home</Button></Link></li>
                    <li><Link className='link' to='/products'><Button height={56} appearance="primary">Products</Button></Link></li>
                    <li><Link className='link' to='/blog'><Button height={56} appearance="primary">Blog</Button></Link></li>
                    <li><Link className='link' to='/contact'><Button height={56} appearance="primary">Contact</Button></Link></li>
                    {!props.currentUser ?
                        <li><Link className='link' to='/user'><Button height={56} appearance="primary">Sign Up</Button></Link></li>
                        :
                        <li><Link className='link' to='/user'><Button height={56} appearance="primary">{props.currentUser.name}</Button></Link></li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header;