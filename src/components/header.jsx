import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='titleBlock'>
            <header className='mainHeader'>
                Lager's Lumber Creations
            </header>
            <nav className='navBar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/user'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;