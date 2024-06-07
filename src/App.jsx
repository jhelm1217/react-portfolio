import { Link } from "react-router-dom"
import AboutMe from "./AboutMe";
import Navbar from "./NavBar";

function App () {
  return (
  <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
      <div className="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <div className="text">
          <h1 style={{ color: "white" }}>Hi! My Name is Jacinta!</h1>
          <p style={{ color: "white" }}>I am a software developer. Thank you for coming to my page!</p>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default App

