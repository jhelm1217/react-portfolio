import { Link } from "react-router-dom"

function Projects() {
  return (
    <div className="projects-background">
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1 style={{ color: "white" }}>My Projects</h1>
    </div>
    <div className="details" style={{ color: "white", marginTop: '60px'}}>
        <h2>My Tic Tac Toe Game!</h2>
        <p style={{ color: 'white'}}>I made this game in week 3 of my BootCamp.</p>
        <p><a href="https://jhelm1217.github.io/tic-tac-toe/">Click Here</a></p>
      {/* </div> */}
      
      {/* <div className="details" style={{ color: "white" }}> */}
        <h2>The Weather App</h2>
        <p style={{ color: 'white'}}>This weather app allows you to input the name of a city and get the current temperature.</p>
        <p><a href="https://jhelm1217.github.io/weather-app/">Click Here</a></p>
      </div>
    </div>
  
  )
}


export default Projects
