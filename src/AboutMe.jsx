import { Link } from "react-router-dom"
import './App.css'
// import logo from 'assets/sunflower.jpeg'

function AboutMe() {
  return (

    
    <div className="aboutme-background">
    <div className="header-container">

      <Link to='/'>{'<- Back'}</Link>
      <h1 style={{ color: "grey" }}>All About Jacinta!</h1>
      </div>
      <div className="aboutme-container">
      <div className="aboutme-section">
    <h3>Who is Jacinta?</h3>
      <p>
      Originally from the St. Louis area, I moved to Kentucky in 2017. Before transitioning into software development, I worked as an early childhood teacher, 
      a role I thoroughly enjoyed and cherished. However, I felt a part of me wasn't being fulfilled. After extensive research, I discovered that software development offered 
      the perfect blend of creativity and problem-solving that I was looking for. Outside of coding, I enjoy traveling, cooking, and being creative in various forms. 
      I love spending time with my 13-year-old son Aydan and my two cats, Poppa (a Gray Tabby) and Ja'ci (a tortoiseshell)
      </p>
      </div>

      <div className="aboutme-section">
      <h3>Why Software Development?</h3>
      <p>
      For me, software development is like solving a giant puzzle, and the sense of accomplishment from successfully writing code is truly amazing. I value the flexibility and creativity the field offers and 
      enjoy the dopamine hits from overcoming coding challenges.
    
      Feel free to explore my portfolio to see some of the projects I've been working on. I'm excited to continue growing and learning in this field and look forward to the opportunities ahead.
      </p>
    </div>
    </div>
    </div>
  
    
  )
}


export default AboutMe




