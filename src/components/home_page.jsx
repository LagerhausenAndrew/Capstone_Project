import React from 'react';

const HomePage = (props) => {
    return(
        <div className='homePageContent'>
            <div className='profileImage'>
                <img src='/profile_image.jpg' />
            </div>
            <div className='homePageText'>
                <div className='aboutMeSection'>
                    <h3>About Me</h3>
                    <p>Hello, Thank you for coming to my website.</p>
                </div>
                <div className='favoriteProjectSection'>
                    <h3>Favorite Project</h3>
                    <p>Hello, Thank you for coming to my website.</p>
                </div>
                <div className='goalsSection'>
                    <h3>Goals/Aspirations</h3>
                    <p>Hello, Thank you for coming to my website.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;