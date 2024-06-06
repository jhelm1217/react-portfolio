import { Link } from "react-router-dom"
import AboutMe from "./AboutMe";

const Title = () => {
  return (
    <h1 style={{ color: "white", textAlign: "center" }}>
      Welcome to My World
    </h1>
  )
}

function App() {
  return (
    <div>
    <div className="p-5" style= {{ textAlign: "center"}}>
      <Link to='/aboutme' style={{ fontSize: "50px", marginTop: "20px", marginRight: "20px", color: "white" }}>AboutMe</Link>
      <Link to='/journey' style={{ fontSize: "50px", marginTop: "20px", marginRight: "20px", color: "white" }}>Journey</Link>
      <Link to='/projects' style={{ fontSize: "50px", marginTop: "20px", marginRight: "20px", color: "white" }}>Projects</Link>
      <Link to='/contact' style={{ fontSize: "50px", marginTop: "20px", marginRight: "20px", color: "white" }}>Contact</Link>
      <Title />
    </div>

        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} > 
        {/* <img src="./src/assets/fountain.jpeg " alt="photo of me in CWE, STL" /> */}
        <div className="text" style={{ flex: 1 }}>
          <h1 style= {{ color: "white" }}>Hi! My Name is Jacinta!</h1>
          <p style= {{ color: "white" }}>I am a software developer. Thank you for coming to my page!</p>
        </div>
    </div>
  </div>
  );
}


export default App
