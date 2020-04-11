import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className='container'>
            <h1 style={{textAlign: 'center' , marginTop: '25px' , marginBottom: '70px'} }> Home Page</h1>
            <p> This website is created by Aman Singal,
                in order to use it you need to login or if you dont have an account
                you can create one real quick
            </p>
            <h3 style={{marginTop: '30px'}}>What does this website do?</h3>
            <p style={{marginTop: '15px'}}>Well, this website was created just for learning purpose  but I would be using
                it to store my own password because its SAFE!!!
                The main <strong>OBJECTIVE</strong> of the website is to let people store all
                their password at one place so they dont have to reset it again and again.

                You can fork me on GitHub if you want  https://www.github.com/aman-singal
                </p>
            <h3 style={{marginTop: '30px'}}>For Me!!!</h3>
            <p style={{marginTop: '15px'}}>I created this website when the whole world was down with Covid-19 and most of the 
                countries have issued lockdown. Today's date is 10-April-2020.
                God I know I am really gonna miss it. When I will look this date after sometime.
                {/* Today I flew Kite with my father */}
            </p>
        </div>
    )
}

export default Home
