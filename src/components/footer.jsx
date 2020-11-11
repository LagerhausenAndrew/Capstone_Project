import React from 'react';

const Footer = (props) => {
    return(
        <div className='footerBox'>
            <div className='copyright'>
                <p>&copy;2020 Lager's Lumber Creations</p>
            </div>
            <div className='developerName'>
                <p>Andrew Lagerhausen</p>
            </div>
            <div className='socialMedia'>
                <a className='socialMediaTag' href='https://www.facebook.com/LagersLumberCreations'>Facebook</a>
            </div>
        </div>
    )
}

export default Footer;