import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return(
        <div>
            <h1>Lager's Lumber Creations</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/user'>Sign Up</Link>
            </nav>
        </div>
    )
}

export default Header;