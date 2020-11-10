import React from 'react';

const HomePage = (props) => {
    return(
        <div className='homePageContent'>
            <div className='profileImage'>
                <img src='/profile_image.jpg' />
            </div>
            <div className='homePageText'>
                <div className='aboutMeSection'>
                    <h2 className='favCustHead'>About Me</h2>
                    <p className='favCustText'>Hello, Thank you for coming to my website. My name is Andrew Lagerhausen. I created ceramics for 6 years and decided to learn a new skill, woodworking. I hope to be able to serve you in whatever creative wood idea you want to have come to life.</p>
                </div>
                <div className='favoriteProjectSection'>
                    <h2 className='favCustHead' >Favorite Project</h2>
                    <p className='favCustText'>My favorite projects are the ones that I can see the excitement on the customers face when what they imagined has come to fruition. My most favorite project, while it may be simple, the excitement on his face was priceless. I created a simple corn hole set for my best friends dad and he was super thrilled.</p>
                </div>
                <div className='goalsSection'>
                    <h2 className='favCustHead'>Goals/Aspirations</h2>
                    <p className='favCustText'>Well, make yourself at home here! If you see anything that you would like to have me make for you, just simply hit the 'add to cart' button by each product and it will put it in your shopping cart. Whenever you go to checkout it will send me a link with your order and I will be in touch after that! Also, if you do not see soemthing on my products page that you like, there is a contact button that you can submit your information and an image if you want of your idea and we can discuss that as well!</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;