import React from 'react'

function Footer(){
    return(
        <section className="footer">
            <div className='footerdiv'>
            <p className="pfooter">©Copyright 2024. </p>
            <p>+91-7569954965</p>
            <p>pavankumard351@gmail.com </p>
            <p> <a href='https://github.com/7569954965'><img className="logo2" src="images/git.jpg" alt="git" /></a></p>
            <p>
                <a href='https://www.linkedin.com/in/d-pavan-kumar-560166278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> 
                <img className="logo3" 
                src="images/linkedin.jpg" 
                alt="linkedin" /></a>
            </p>
            </div>
        </section>
    )
}

export default Footer;