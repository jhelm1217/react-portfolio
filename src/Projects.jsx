import { Link } from "react-router-dom";
import './App.css'; // Make sure you have styles for the project cards in your CSS file
// import './projects.css'

function Projects() {
  return (
    <div className="projects-background">
      <div className="p-5">
        <Link to='/'>{'<- Back'}</Link>
        <h1 style={{ color: "white", textAlign: 'center' }}>My Projects</h1>
      </div>
      <div className="projects-container" style={{ marginTop: '60px', display: 'flex', flexDirection: 'row', alignItems: 'center', overflow: 'y' }}>
        <div className="project-card">
          <h2 style={{ color: 'white' }}>Pack Your Bags!</h2>
          <a href="https://pack-bags.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/packyourbags.png" alt="Pack Your Bags!" className="project-screenshot" />
            <p style={{ color: 'white' }}> This is my final project that I presented for my capstone project for my demo day. </p>
          </a>

        </div>
        <div className="project-card">
          <h2 style={{ color: 'white' }}>My Tic Tac Toe Game!</h2>
          <a href="https://jhelm1217.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/tictactoe.png" alt="Tic Tac Toe Game" className="project-screenshot" />
          </a>
          <p style={{ color: 'white' }}>I made this game in week 3 of my BootCamp.</p>
        </div>
        
        <div className="project-card">
          <h2 style={{ color: 'white' }}>The Weather App</h2>
          <a href="https://jhelm1217.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/weather.png" alt="Weather App" className="project-screenshot" />
          </a>
          <p style={{ color: 'white' }}>This weather app allows you to input the name of a city and get the current temperature.</p>
        </div>
        <div className="project-card">
          <h2 style={{ color: 'white' }}>To Do List!</h2>
          <a href="https://todo-list-weld-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/todolist.png" alt="To Do List" className="project-screenshot" />
          </a>
          <p style={{ color: 'white' }}>A fun to do list for you to keep track of all your tasks!</p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
