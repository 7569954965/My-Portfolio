import React from 'react'

const About = () => {
  return (
    <section className='aboutsec'>
    <div>
        <div>
            <h2 id='ah2'>
                About Me :
            </h2>
        </div>
        <p>
            As I said, I am your friendly
            neighbourhood...
        </p>
        <p>
         I'm a Student from CS grad who is interested to learn new things every day 
         and upskill myself so that I could be able to use my skills and 
         knowledge in a well-established organization and contribute to the projects 
         which yield good results for me and my company.<br/>
         As a software developer, I have gained valuable knowledge in building a scalable and efficient system. 
         I have expertise in Java, Javascript,HTML+CSS, BootStrap, React, Sql.

{/*         
            (which is quite a subjective thing as i learnt from
            teachers on youtube so does that really counts?
            idk). I am having an experience of about 4 years
            and had a deep understanding of creating web products. */}
        </p>
        <div>
            <h2 id='ah2'>
                Education :
            </h2>
        </div>
        <table>
            <tr>
                <th className='th' colSpan={2} style={{textAlign:"left"}}>B-Tech Computer Science</th>
                <th className='th' ><span className='span'>Full Time</span></th>
            </tr>
            <tr>
                <td className='td'><img className='alogo1' src="images/build.jpg" alt="btect" />  TKR College OF Engineering And Technology </td>
                <td className='td'><img className='alogo1' src="images/loc.jpg" alt="loc" /> Hyderabad</td>
                <td className='td'><img className='alogo1' src="images/date.jpg" alt="date" /> June 2019 - July 2023</td>
            </tr>

            <tr>
                <th className='th'  colSpan={2} style={{textAlign:"left"}}>Intermediate (Maths, Physics, Chemistry)</th>
                <th className='th' ><span className='span'>Full Time</span></th>
            </tr>
            <tr>
                <td className='td'><img className='alogo1' src="images/build.jpg" alt="btect" /> Narayana junoir college</td>
                <td className='td'><img className='alogo1' src="images/loc.jpg" alt="loc" /> Hyderabad</td>
                <td className='td'><img className='alogo1' src="images/date.jpg" alt="date" />June 2018 - Mar 2019</td>
            </tr>
            
            <tr>
                <th className='th'  colSpan={2} style={{textAlign:"left"}}>Secondary School</th>
                <th className='th' ><span className='span'>Full Time</span></th>
            </tr>
            <tr>
                <td className='td'><img className='alogo1' src="images/build.jpg" alt="btect" /> Vasavi High School</td>
                <td className='td'><img className='alogo1' src="images/loc.jpg" alt="loc" /> Nirmal</td>
                <td className='td'><img className='alogo1' src="images/date.jpg" alt="date" />june 2016 - May 2017</td>
            </tr>

        

        </table>
        {/* <div className='adiv1'>
                    <h4>B-Tech Computer Science</h4>
                    <span id='Para'>Full Time</span>
        </div>
        <div className='adiv2'>
            <div className='aadiv1'>
                <img className='alogo1' src="images/build.jpg" alt="btect" />
                <span>TKR College OF Engineering And Technology</span>
            </div>
            <div className='aadiv2'>
                <img className='alogo1' src="images/loc.jpg" alt="loc" />
                <span>Hyderabad</span>
            </div>
            <div className='aadiv3'>
                <img className='alogo1' src="images/date.jpg" alt="date" />
                <span>June 2019 - July 2023</span>
            </div>
        </div>
        <div className='adiv1'>
                    <h4>Intermediate (Maths, Physics, Chemistry)</h4>
                    <span id='Para'>Full Time</span>
        </div>
        <div className='adiv2'>
            <div className='aadiv1'>
                <img className='alogo1' src="images/build.jpg" alt="btect" />
                <span>Narayana Junior College</span>
            </div>
            <div className='aadiv2'>
                <img className='alogo1' src="images/loc.jpg" alt="loc" />
                <span>Hyderabad</span>
            </div>
            <div className='aadiv3'>
                <img className='alogo1' src="images/date.jpg" alt="date" />
                <span>June 2018 - Mar 2019</span>
            </div>
        </div>
        <div className='adiv1'>
                    <h4>Secomdary School</h4>
                    <span id='Para'>Full Time</span>
        </div>
        <div className='adiv2'>
            <div className='aadiv1'>
                <img className='alogo1' src="images/build.jpg" alt="btect" />
                <span>Vasavi High School</span>
            </div>
            <div className='aadiv2'>
                <img className='alogo1' src="images/loc.jpg" alt="loc" />
                <span>Nirmal</span>
            </div>
            <div className='aadiv3'>
                <img className='alogo1' src="images/date.jpg" alt="date" />
                <span> june 2016 - May 2017</span>
            </div>
        </div> */}
    </div>
</section>
  )
}

export default About
