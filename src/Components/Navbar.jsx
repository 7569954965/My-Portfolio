
function Navbar() {
  return (
    <nav className="nav">
      <div className="maindiv">
        <img className="logo1"  src="images/ppic.jpg" alt="Logo" />
       <ul className="ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="https://github.com/7569954965"><img className="logo2" src="images/git.jpg" alt="git" /></a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/d-pavan-kumar-560166278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img className="logo3" src="images/linkedin.jpg" alt="linkedin" /></a>
          </li>
    
      </ul>
      </div>
      
      
    </nav>
  )
}

export default Navbar
