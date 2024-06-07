// import { Link } from "react-router-dom"

// function Projects() {
//   return (
//     <div className="projects-background">
//     <div className="p-5">
//       <Link to='/'>{'<- Back'}</Link>
//       <h1 style={{ color: "white" }}>My Projects</h1>
//     </div>
//     <div className="details" style={{ color: "white", marginTop: '60px'}}>
//         <h2>My Tic Tac Toe Game!</h2>
//         <p style={{ color: 'white'}}>I made this game in week 3 of my BootCamp.</p>
//         <p><a href="https://jhelm1217.github.io/tic-tac-toe/">Click Here</a></p>
//       {/* </div> */}
      
//       {/* <div className="details" style={{ color: "white" }}> */}
//         <h2>The Weather App</h2>
//         <p style={{ color: 'white'}}>This weather app allows you to input the name of a city and get the current temperature.</p>
//         <p><a href="https://jhelm1217.github.io/weather-app/">Click Here</a></p>
//       </div>
//     </div>
  
//   )
// }


// export default Projects
import { Link } from "react-router-dom";
import './App.css'; // Make sure you have styles for the project cards in your CSS file

function Projects() {
  return (
    <div className="projects-background">
      <div className="p-5">
        <Link to='/'>{'<- Back'}</Link>
        <h1 style={{ color: "white" }}>My Projects</h1>
      </div>
      <div className="projects-container" style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="project-card">
          <h2 style={{ color: 'white' }}>My Tic Tac Toe Game!</h2>
          <a href="https://jhelm1217.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/tictactoe.png" alt="Tic Tac Toe Game" className="project-screenshot" />
          </a>
          <p style={{ color: 'white' }}>I made this game in week 3 of my BootCamp.</p>
        </div>
        
        <div className="project-card">
          <h2 style={{ color: 'white' }}>The Weather App</h2>
          <a href="https://jhelm1217.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/weather.png" alt="Weather App" className="project-screenshot" />
          </a>
          <p style={{ color: 'white' }}>This weather app allows you to input the name of a city and get the current temperature.</p>
        </div>
        <div className="project-card">
          <h2 style={{ color: 'white' }}>To Do List!</h2>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/todolist.png" alt="To Do List" className="project-screenshot" />
          </a>
          <p style={{ color: 'white' }}>A fun to do list for you to keep track of all your tasks!</p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
