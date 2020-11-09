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
                    <Link className='tabs' to='/'><Button text-align="center" height={60} width={200} appearance="primary">Home</Button></Link>
                    <Link className='tabs' to='/products'><Button height={60} width={200} appearance="primary">Products</Button></Link>
                    <Link className='tabs' to='/blog'><Button height={60} width={200} appearance="primary">Blog</Button></Link>
                    <Link className='tabs' to='/contact'><Button height={60} width={200} appearance="primary">Contact</Button></Link>
                    <Link className='tabs' to='/user'><Button height={60} width={200} appearance="primary">Login</Button></Link>
            </nav>
        </div>
    )
}

export default Header;