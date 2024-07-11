import React from 'react'
import Skills from './Skills'

const Home = () => {
  return (
    <>
    <section className='section'>
      <div className='cdiv'>
        <div className='cdiv2'>
          <h4 id='h4'>
            Hi and welcome to
          </h4>
          <h2 id='h2'>
            My Protfolio website
          </h2>
        <p id='p'>
        I am Pavan Kumar Rao I am very Passionate and Interested in Tech World...
        </p>
        </div>
        <div>
          <img className='cimg' src="images/pavanpic.jpeg" alt="PavanPic" />
        </div>

      </div>

      
    </section>
    <Skills/>
    </>
   
  )
}

export default Home
