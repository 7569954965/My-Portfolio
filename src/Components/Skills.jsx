import React from 'react'

const Skills = () => {
  const skills = ["Core Java", "Advance Java","HTML", "CSS", "Javascript", "React Basics", "bootstrap","SQL","VS code"];
  return (
    <section className='mainskill'>
        <h2 className='h2skill'>
            My Skills...
        </h2>
        <div className='divskill'>
            {skills.map((skill, index) => {
                return (
                    <div key={index} 
                    className='divskill2' >
                        {skill}
                    </div>
                )})}
        </div>
    </section>
    
  )
}

export default Skills
