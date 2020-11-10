import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'evergreen-ui';

const Header = (props) => {
    return(
        <div className='titleBlock'>
            <header className='mainHeader'>
                Lager's Lumber Creations
            </header>
            <nav className='navBar'>
                <ul>
                    <li><Link className='tabs' to='/'>Home</Link></li>
                    <li><Link className='tabs' to='/products'>Products</Link></li>
                    <li><Link className='tabs' to='/blog'>Blog</Link></li>
                    <li><Link className='tabs' to='/contact'>Contact</Link></li>
                    <li><Link className='tabs' to='/user'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;